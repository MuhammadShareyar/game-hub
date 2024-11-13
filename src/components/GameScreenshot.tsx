import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (data?.results.length == 0) return null;

  return (
    <Box>
      <Heading>Screenshots</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}>
        {data?.results.map((image) => (
          <Image
            padding={1}
            borderRadius={10}
            key={image.id}
            src={image.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshot;
