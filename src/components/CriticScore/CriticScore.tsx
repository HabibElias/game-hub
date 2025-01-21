import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  const color = score > 85 ? "green" : score > 50 ? "yellow" : "";

  return (
    <Badge fontSize={"1rem"} padding={"10px"} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
