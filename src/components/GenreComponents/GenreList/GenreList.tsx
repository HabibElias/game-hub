import useGenre from "@/hooks/useGenre";
import getCroppedImages from "@/services/getCroppedImages";
import { Badge, Button, HStack, Image, List, Text } from "@chakra-ui/react";
import GenreSkeleton from "../GenreSkeleton";
import useGameQuery from "@/hooks/useGameQuery";

const GenreList = () => {
  // the data is a genre type
  const { data, error, isLoading } = useGenre();

  const onSelectedGenre = useGameQuery((s) => s.selectGenre);
  
  const selectedGenreId = useGameQuery((s) => s.genreId);

  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <>
      {error && <Text>{error.message}</Text>}

      {!isLoading && (
        <List.Root listStyle={"none"} gap={5}>
          <List.Item>
            <Button
              variant={"surface"}
              colorPalette={selectedGenreId == null ? "purple" : "black"}
              _hover={{ textDecoration: "underline" }}
              textDecoration={selectedGenreId == null ? "underline" : "none"}
              onClick={() => onSelectedGenre()}
            >
              All
            </Button>
          </List.Item>
          {data?.results.map((g) => {
            return (
              <List.Item key={g.id} cursor={"pointer"}>
                <Button
                  variant={"surface"}
                  colorPalette={selectedGenreId == g.id ? "purple" : "black"}
                  _hover={{ textDecoration: "underline" }}
                  textDecoration={
                    selectedGenreId == g.id ? "underline" : "none"
                  }
                  onClick={() => onSelectedGenre(g.id)}
                >
                  <HStack>
                    <Image
                      boxSize={"32px"}
                      borderRadius={4}
                      src={getCroppedImages(g.image_background, 600, 400)}
                    />
                    <Text fontFamily="Poppins" fontSize={"sm"}>
                      {g.name}
                    </Text>
                    <Badge
                      fontFamily={"Poppins"}
                      fontSize={10}
                      colorPalette={"black"}
                    >
                      {g.games_count}
                    </Badge>
                  </HStack>
                </Button>
              </List.Item>
            );
          })}
        </List.Root>
      )}
      {isLoading && (
        <List.Root listStyle={"none"} gap={5}>
          {skeleton.map((e) => (
            <List.Item key={e}>
              <GenreSkeleton />
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;
