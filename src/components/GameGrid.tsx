import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSekelon from "./GameCardSekelon";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonGames = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing="10px"
        padding="10px"
      >
        {isLoading && skeletonGames.map(() => <GameCardSekelon />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
