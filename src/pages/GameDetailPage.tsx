import GameDescription from "@/components/GameComponents/GameDescription";
import GameDetailSkeleton from "@/components/GameComponents/GameDetailSkeleton";
import GamePhotos from "@/components/GameComponents/GamePhotos";
import GameTrailer from "@/components/GameComponents/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameComponents/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();

  if (!slug) throw Error;

  const { data: game, error, isLoading } = useGame(slug);

  if (error) throw error;

  if (isLoading) return <GameDetailSkeleton />;

  return (
    <Box padding={6}>
      <SimpleGrid
        columns={{ lg: 2, base: 1 }}
      >
        <GridItem>
          <Heading size={"4xl"} fontFamily={"Poppins"} marginBottom={1}>
            {game.name}
          </Heading>
          <GameDescription description={game.description_raw} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.slug} />
          <GamePhotos gameId={game.slug} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
