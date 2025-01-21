import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";

const NavBar = () => {
  return (
    <HStack padding="5px 20px" display="flex" justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize={"60px"} />
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
