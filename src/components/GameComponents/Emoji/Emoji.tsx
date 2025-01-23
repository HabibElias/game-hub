import like from "../../../assets/Emojis/thumbs-up.webp";
import meh from "../../../assets/Emojis/meh.webp";
import bullseye from "../../../assets/Emojis/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "32px" },
    4: { src: like, alt: "recommended", boxSize: "32px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "32px" },
  };
  return (
    <>
      <Image {...emojiMap[rating]} />
    </>
  );
};

export default Emoji;
