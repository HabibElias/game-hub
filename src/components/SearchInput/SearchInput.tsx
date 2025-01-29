import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import useGameQuery from "@/hooks/useGameQuery";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const search  = useGameQuery(s => s.search);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        search(ref.current?.value as string);
      }}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <InputGroup
        width={{ lg: "50%", base: "80%" }}
        padding={2}
        startElement={<LuSearch size={"20px"} />}
      >
        <Input
          ref={ref}
          size={"2xl"}
          colorPalette={"purple"}
          variant={"flushed"}
          placeholder="Search Games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
