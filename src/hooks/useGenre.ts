import ApiClient, { FetchResponse } from "@/services/api-client";
import Genre from "@/models/genre";
import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";
const apiClient = new ApiClient<Genre>("/genres");

const useGenre = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 24 * 60 * 60,
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
