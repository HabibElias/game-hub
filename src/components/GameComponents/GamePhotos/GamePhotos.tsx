import usePhotos from "@/hooks/usePhotos";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Prop {
  gameId: number | string;
}

const GamePhotos = ({ gameId }: Prop) => {
  const { data, isLoading, error } = usePhotos(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid
        placeItems={{ base: "center", lg: "start" }}
        columns={{md: 2, sm: 1 }}
        gridGap={5}
        marginTop={5}
      >
        {data?.results.map((img) => (
          <Image key={img.id} src={img.image} width={300} height={200} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamePhotos;
