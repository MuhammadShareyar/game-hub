import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttribute";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>

      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshot gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
