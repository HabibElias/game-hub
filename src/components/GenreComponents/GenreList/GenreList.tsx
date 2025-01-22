import useData from "@/hooks/useData";
import Genre from "@/models/genre";
import getCroppedImages from "@/services/getCroppedImages";
import { HStack, List, Text, Image, Badge, Button } from "@chakra-ui/react";
import GenreSkeleton from "../GenreSkeleton";

interface Props {
  selectedGenreIndex: number | undefined;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreIndex, onSelectedGenre }: Props) => {
  // the data is a genre type
  const { data, error, isLoading } = useData<Genre>("/genres");
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}

      {!isLoading && (
        <List.Root listStyle={"none"} gap={5}>
          {data.map((genre) => {
            return (
              <List.Item key={genre.id} cursor={"pointer"}>
                <Button
                  variant={"surface"}
                  colorPalette={
                    selectedGenreIndex == genre.id ? "purple" : "black"
                  }
                  _hover={{ textDecoration: "underline" }}
                  textDecoration={
                    selectedGenreIndex == genre.id ? "underline" : "none"
                  }
                  onClick={() => onSelectedGenre(genre)}
                >
                  <HStack>
                    <Image
                      boxSize={"32px"}
                      borderRadius={4}
                      src={getCroppedImages(genre.image_background, 600, 400)}
                    />
                    <Text fontFamily="Poppins" fontSize={"sm"}>
                      {genre.name}
                    </Text>
                    <Badge
                      fontFamily={"Poppins"}
                      fontSize={10}
                      colorPalette={"black"}
                    >
                      {genre.games_count}
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
