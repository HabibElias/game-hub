import Game from "@/models/game_model";
import PlatformIcons from "../PlatformIcons/PlatformIcons";
import { Card, HStack, Image } from "@chakra-ui/react";
import CriticScore from "../CriticScore";
import getCroppedImages from "@/services/getCroppedImages";

interface prop {
  game: Game;
}

const GameCard = ({ game }: prop) => {
  return (
    <Card.Root>
      <Image
        src={getCroppedImages(game.background_image)}
        width={"100%"}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Card.Body>
        <Card.Title fontWeight={"bold"}>{game.name}</Card.Title>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
