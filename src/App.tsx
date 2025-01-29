import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameComponents/GameGrid";
import GenreList from "./components/GenreComponents/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./index.css";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `
             "nav nav" 
             "aside main" 
             "aside main" 
             `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "max-content 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
        <Box paddingLeft={10}>
          <GameHeading/>
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
