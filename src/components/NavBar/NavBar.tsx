import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="5px 20px" display="flex" justifyContent="space-between">
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize={"60px"} />
        </Link>
      </HStack>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
