import useGame from "@/hooks/useGame";
import useGameQuery from "@/hooks/useGameQuery";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameBoxStyle from "../GameBoxStyle/GameBoxStyle";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";

const GameGrid = () => {
  const { genreId, platformId, ordering, searchText } = useGameQuery();
  const { data, error, fetchNextPage, hasNextPage, isLoading } = useGame({
    genreId,
    platformId,
    ordering,
    searchText,
  });

  if (error) return <Text>{error.message}</Text>;

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchGamePageCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {!isLoading && (
        <InfiniteScroll
          dataLength={fetchGamePageCount} //This is important field to render the next data
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
              gridGap={20}
              marginY={20}
              id="scrollableView"
            >
              {skeleton.map((e) => (
                <GameBoxStyle key={e}>
                  <GameCardSkeleton />
                </GameBoxStyle>
              ))}
            </SimpleGrid>
          }
        >
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
            gridGap={20}
            id="scrollableView"
          >
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameBoxStyle key={game.id}>
                    <GameCard game={game} />
                  </GameBoxStyle>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      )}
      {isLoading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
          gridGap={20}
          id="scrollableView"
        >
          {skeleton.map((e) => (
            <GameBoxStyle key={e}>
              <GameCardSkeleton />
            </GameBoxStyle>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
