import Game from "@/models/game_model";
import PlatformIcons from "../PlatformIcons/PlatformIcons";
import { Card, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CriticScore from "../CriticScore";
import getCroppedImages from "@/services/getCroppedImages";
import placeholder from "../../../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";
import RatingGame from "../RatingGame";

interface prop {
  game: Game;
}

const GameCard = ({ game }: prop) => {
  return (
    <Card.Root
      _hover={{
        transform: "scale(1.02)",
        zIndex: 1,
      }}
      transition={"transform 0.15s ease-in"}
    >
      <Image
        src={
          game.background_image
            ? getCroppedImages(game.background_image, 600, 400)
            : placeholder
        }
        width={"100%"}
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
      />
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} fontSize={16} />
        </HStack>
        <Link to={`/games/${game.slug}`}>
          <Card.Title
            _hover={{ textDecoration: "underline" }}
            fontFamily="Poppins"
            fontWeight={"bold"}
            marginBottom={2}
          >
            {game.name}
          </Card.Title>
        </Link>
        <RatingGame rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
