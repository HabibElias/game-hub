import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description: string;
}

const GameDescription = ({ description }: Props) => {
  const [more, setMore] = useState(false);
  return (
    <>
      
      <Box width={{ base: "100%", lg: "70%" }}>
        <Text marginBottom={3} opacity={0.8}>
          {!more ? description.slice(0, description.length/2) + '........' : description}
        </Text>
        <Button
          fontFamily={"Poppins"}
          variant={"solid"}
          colorPalette={"purple"}
          onClick={() => setMore(!more)}
        >
          {!more ? "More" : "Less"}
        </Button>
      </Box>
    </>
  );
};

export default GameDescription;
