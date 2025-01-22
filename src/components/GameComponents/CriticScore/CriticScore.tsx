import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
  fontSize: number;
}

const CriticScore = ({ score, fontSize }: props) => {
  const color = score > 85 ? "green" : score > 50 ? "yellow" : "";

  return (
    <Badge fontSize={`${fontSize}px`} padding={"10px"} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
