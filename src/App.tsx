import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameComponents/GameGrid";
import GenreList from "./components/GenreComponents/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import GameQuery from "./models/game_query";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar onSearch={setGameQuery} gameQuery={gameQuery} />
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
        <GenreList gameQuery={gameQuery} onSelectedGenre={setGameQuery} />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading gameDetails={gameQuery}></GameHeading>
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              gameQuery={gameQuery}
              onSelectedPlatform={setGameQuery}
            />
            <SortSelector gameQuery={gameQuery} onSelectedSort={setGameQuery} />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
