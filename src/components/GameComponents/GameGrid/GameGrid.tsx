import useData from "@/hooks/useData";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameBoxStyle from "../GameBoxStyle/GameBoxStyle";
import Game from "@/models/game_model";
import Genre from "@/models/genre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre]
  );
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
        gridGap={20}
        padding={"50px 10px"}
        placeItems={"center"}
      >
        {!isLoading
          ? data.map((game) => {
              return (
                <GameBoxStyle key={game.id}>
                  <GameCard game={game} />
                </GameBoxStyle>
              );
            })
          : skeleton.map((e) => (
              <GameBoxStyle key={e}>
                <GameCardSkeleton />
              </GameBoxStyle>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
