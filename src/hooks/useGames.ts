import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import ApiClient from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialPageParam: 1,
  });
};

export default useGames;
