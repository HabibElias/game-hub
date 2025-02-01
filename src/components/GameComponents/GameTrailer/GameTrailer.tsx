import useTrailer from "@/pages/useTrailer";

const GameTrailer = ({ gameId }: { gameId: number | string }) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      width={"100%"}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
