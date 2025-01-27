import useGame from "@/hooks/useGame";
import GameQuery from "@/models/game_query";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameBoxStyle from "../GameBoxStyle/GameBoxStyle";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, fetchNextPage, refetch } = useGame(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={true}
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
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refetch}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
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
  );
};

export default GameGrid;
