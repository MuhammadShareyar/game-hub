import { Grid, Show, GridItem, Box, HStack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformsSelector from '../components/PlatformsSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box marginLeft={3}>
          <GameHeading />
          <HStack marginBottom={5} spacing={8}>
            <PlatformsSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage