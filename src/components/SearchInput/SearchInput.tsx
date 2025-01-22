import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup
      width={{ lg: "50%", base: "80%" }}
      padding={2}
      startElement={<LuSearch size={"20px"} />}
    >
      <Input
        size={"2xl"}
        colorPalette={"purple"}
        variant={"flushed"}
        placeholder="Search Games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
