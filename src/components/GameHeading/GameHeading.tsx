import GameQuery from "@/models/game_query";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameDetails: GameQuery;
}

const GameHeading = ({ gameDetails }: Props) => {
  return (
    <>
      <Heading size={"4xl"} fontFamily={"Poppins"} marginBottom={5}>
        {gameDetails.platform?.name ? gameDetails.platform?.name + " " : ""}
        {gameDetails.genre?.name ? gameDetails.genre?.name + " " : ""}
        Games
      </Heading>
    </>
  );
};

export default GameHeading;
