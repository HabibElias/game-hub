import GameGrid from "@/components/GameComponents/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreComponents/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, Heading, Box, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `
                 "aside main" 
                 "aside main" 
                 `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "max-content 1fr",
      }}
    >
      <GridItem
        hideBelow={`lg`}
        area="aside"
        padding="5px 0 0 28px"
        position={"sticky"}
      >
        <Heading size={"2xl"} fontFamily={"Poppins"} marginBottom={5}>
          Genre
        </Heading>
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
