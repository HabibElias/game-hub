import ScreenShots from "@/models/ScreenShots";
import ApiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const usePhotos = (game_pk: string | number) => {
  const apiClient = new ApiClient<ScreenShots>(`games/${game_pk}/screenshots`);
  return useQuery<FetchResponse<ScreenShots>, Error>({
    queryKey: ["screenshots", game_pk],
    queryFn: apiClient.getAll,
  });
};

export default usePhotos;
