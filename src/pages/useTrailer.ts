import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import Trailer from "@/models/Trailer";

const useTrailer = (slug: number | string) => {
  const apiClient = new ApiClient<Trailer>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
