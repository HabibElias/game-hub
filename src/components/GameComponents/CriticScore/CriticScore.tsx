import { Badge } from "@chakra-ui/react";

interface props {
  score: number | null;
  fontSize: number;
}

const CriticScore = ({ score, fontSize }: props) => {
  let color = "";
  if (score == null) return null;
  else color = score > 85 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize={`${fontSize}px`} padding={"10px"} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
