import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "../SearchInput";
import GameQuery from "@/models/game_query";
interface Props {
    gameQuery: GameQuery;
    onSearch: (searchText: GameQuery)=> void;
}
const NavBar = ({gameQuery, onSearch}: Props) => {
  return (
    <HStack padding="5px 20px" display="flex" justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize={"60px"} />
      </HStack>
      <SearchInput gameQuery={gameQuery} onSearch={onSearch}/>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
