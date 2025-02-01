import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ children, term }: Props) => {
  return (
    <Box marginY={5}>
      <Heading
        as="dt"
        fontSize={"xl"}
        fontFamily={"poppins"}
        marginBottom={1}
        color={"grey"}
      >
        {term}
      </Heading>
      <dt>{children}</dt>
    </Box>
  );
};

export default DefinitionItem;
