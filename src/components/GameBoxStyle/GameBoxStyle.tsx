import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface prop {
  children: ReactNode;
}

const GameBoxStyle = ({ children }: prop) => {
  return (
    <Box width={300} borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameBoxStyle;
