import GameQuery from "@/models/game_query";
import Game from "@/models/game_model";
import ApiClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.searchText,
        page: pageParam,
        page_size: 28,
      }),
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
  });
export default useGame;
