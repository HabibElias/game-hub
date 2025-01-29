import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/platforms";
import ApiClient, { FetchResponse } from "@/services/api-client";
import Platform from "@/models/platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 24 * 60 * 60,
    initialData: { count: platforms.length, next: null, results: platforms },
});
export default usePlatform;
