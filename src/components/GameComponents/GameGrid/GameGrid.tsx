import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameBoxStyle from "../GameBoxStyle/GameBoxStyle";
import GameQuery from "@/models/game_query";
import useGame from "@/hooks/useGame";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }} gridGap={20}>
      {!isLoading
        ? data?.results.map((game) => {
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
  );
};

export default GameGrid;
