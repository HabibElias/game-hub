import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import GameQuery from "@/models/game_query";

interface Props {
    gameQuery: GameQuery;
    onSearch: (searchText: GameQuery)=> void;
}

const SearchInput = ({gameQuery, onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch({...gameQuery, searchText: ref.current?.value || ""})
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
