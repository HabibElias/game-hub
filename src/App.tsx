import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameComponents/GameGrid";
import GenreList from "./components/GenreComponents/GenreList";
import { useState } from "react";
import Genre from "./models/genre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GenreList selectedGenreIndex={selectedGenre?.id} onSelectedGenre={setSelectedGenre}/>
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
