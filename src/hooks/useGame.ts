import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  const apiClient = new ApiClient<Game>(`/games`);
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.getDetails(slug),
  });
};

export default useGame;
