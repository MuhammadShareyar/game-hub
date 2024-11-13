import { List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        <List>
          {game.parent_platforms.map(({ platform }) => (
            <ListItem key={platform.id}>{platform.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        <List>
          {game.genres.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        <List>
          {game.publishers.map((publisher) => (
            <ListItem key={publisher.id}>{publisher.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
