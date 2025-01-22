import Game from "@/models/game_model";
import PlatformIcons from "../PlatformIcons/PlatformIcons";
import { Card, HStack, Image } from "@chakra-ui/react";
import CriticScore from "../CriticScore";
import getCroppedImages from "@/services/getCroppedImages";
import placeholder from "../../../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

interface prop {
  game: Game;
}

const GameCard = ({ game }: prop) => {
  return (
    <Card.Root>
      <Image
        src={
          game.background_image
            ? getCroppedImages(game.background_image, 600, 400)
            : placeholder
        }
        width={"100%"}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Card.Body>
        <Card.Title fontFamily="Poppins" fontWeight={"bold"}>
          {game.name}
        </Card.Title>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} fontSize={16} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
