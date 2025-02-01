import useGameQuery from "@/hooks/useGameQuery";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const { platformId, genreId } = useGameQuery();
  const { data: genre } = useGenre();
  const { data: platform } = usePlatform();

  const genreName = genre.results.find((g) => g.id == genreId)?.name;
  const platformName = platform.results.find((p) => p.id == platformId)?.name;

  return (
    <>
      <Heading size={"4xl"} fontFamily={"Poppins"} marginBottom={5}>
        {genreName ? genreName + " " : ""}
        {platformName ? platformName + " " : ""}
        Games
      </Heading>
    </>
  );
};

export default GameHeading;
