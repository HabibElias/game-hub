import GameQuery from "@/models/game_query";
import useData from "./useData";
import Game from "@/models/game_model";

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering?.value,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
export default useGame;
