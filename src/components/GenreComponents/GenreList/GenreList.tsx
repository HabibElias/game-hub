import getCroppedImages from "@/services/getCroppedImages";
import { HStack, List, Text, Image, Badge, Button } from "@chakra-ui/react";
import GenreSkeleton from "../GenreSkeleton";
import GameQuery from "@/models/game_query";
import useGenre from "@/hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
  onSelectedGenre: (genre: GameQuery) => void;
}

const GenreList = ({ gameQuery, onSelectedGenre }: Props) => {
  // the data is a genre type
  const { data, error, isLoading } = useGenre();
  
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
              colorPalette={gameQuery.genre == null ? "purple" : "black"}
              _hover={{ textDecoration: "underline" }}
              textDecoration={gameQuery.genre == null ? "underline" : "none"}
              onClick={() => onSelectedGenre({ ...gameQuery, genre: null })}
            >
              All
            </Button>
          </List.Item>
          {data?.results.map((g) => {
            return (
              <List.Item key={g.id} cursor={"pointer"}>
                <Button
                  variant={"surface"}
                  colorPalette={
                    gameQuery.genre?.id == g.id ? "purple" : "black"
                  }
                  _hover={{ textDecoration: "underline" }}
                  textDecoration={
                    gameQuery.genre?.id == g.id ? "underline" : "none"
                  }
                  onClick={() => onSelectedGenre({ ...gameQuery, genre: g })}
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
