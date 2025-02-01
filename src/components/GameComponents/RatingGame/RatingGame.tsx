import { Rating } from "@/components/ui/rating";

interface Props {
  rating: number;
}

const RatingGame = ({ rating }: Props) => {
  return (
    <>
      <Rating value={rating} readOnly colorPalette={"purple"} size={"sm"} />
    </>
  );
};

export default RatingGame;
