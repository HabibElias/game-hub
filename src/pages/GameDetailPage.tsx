import GameDescription from "@/components/GameComponents/GameDescription";
import useGame from "@/hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameComponents/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <Box padding={6}>
      <Heading size={"4xl"} fontFamily={"Poppins"} marginBottom={1}>
        {game.name}
      </Heading>
      <GameDescription description={game.description_raw} />
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
