import useGame from "@/hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameBoxStyle from "../GameBoxStyle/GameBoxStyle";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
        gridGap={30}
        padding={20}
        placeItems={"center"}
      >
        {!isLoading
          ? games.map((game) => {
              return (
                <GameBoxStyle>
                  <GameCard key={game.id} game={game} />;
                </GameBoxStyle>
              );
            })
          : skeleton.map((e) => (
              <GameBoxStyle>
                <GameCardSkeleton key={e} />
              </GameBoxStyle>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
