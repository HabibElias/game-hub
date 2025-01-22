import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameComponents/GameGrid";
import GenreList from "./components/GenreComponents/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import GameQuery from "./models/game_query";
import SortSelector from "./components/SortSelector";

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
        <NavBar />
      </GridItem>

      <GridItem
        hideBelow={`lg`}
        area="aside"
        padding={"50px 0 0 28px"}
        position={"sticky"}
      >
        <GenreList gameQuery={gameQuery} onSelectedGenre={setGameQuery} />
      </GridItem>

      <GridItem area="main">
        <HStack gap={5}>
          <PlatformSelector
            gameQuery={gameQuery}
            onSelectedPlatform={setGameQuery}
            />
          <SortSelector
            gameQuery={gameQuery}
            onSelectedSort={setGameQuery}
           />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
