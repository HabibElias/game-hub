import { Box, GridItem, SimpleGrid, Skeleton } from "@chakra-ui/react";

const GameDetailSkeleton = () => {
  return (
    <>
      <Box padding={6}>
        <SimpleGrid columns={{ lg: 2, base: 1 }}>
          <GridItem>
            <Skeleton width={250} height={12} marginBottom={4} />
            {Array.from({ length: 15 }).map((_, index) => (
              <Skeleton
                key={index}
                width={`${100 - Math.random() * 30}%`}
                height={3}
                paddingRight={5}
                marginBottom={1}
              />
            ))}
            <Skeleton width={100} height={12} marginY={5} />

            <SimpleGrid columns={2}>
              {Array.from({ length: 4 }).map((_, index) => (
                <GridItem key={index}>
                  <Skeleton width={200} height={8} marginBottom={3} />
                  {Array.from({ length: 2 }).map((_, index) => {
                    return (
                      <Skeleton
                        key={index}
                        width={`${100 - index * 30}px`}
                        height={3}
                        marginBottom={3}
                      />
                    );
                  })}
                </GridItem>
              ))}
            </SimpleGrid>
          </GridItem>
          <GridItem>
            <SimpleGrid columns={{ md: 2, sm: 1 }} placeItems={"center"}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} width={300} height={200} marginTop={5} />
              ))}
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GameDetailSkeleton;
