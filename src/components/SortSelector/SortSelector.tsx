import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

const PlatformSelector = () => {
  return (
    <Box margin={"28px"} position={"relative"} zIndex={1}>
      <MenuRoot positioning={{ placement: "right" }}>
        <MenuTrigger asChild colorPalette={"purple"}>
          <Button variant="outline" size="xl" fontFamily={"Poppins"}>
            Order by: Relevance
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"} fontFamily={"Poppins"} marginTop={3}>
          <MenuItem cursor={"pointer"} value="relevance">
            Relevance
          </MenuItem>
          <MenuItem cursor={"pointer"} value="data-added">
            Date added
          </MenuItem>
          <MenuItem cursor={"pointer"} value="name">
            Name
          </MenuItem>
          <MenuItem cursor={"pointer"} value="release-date">
            Relevance
          </MenuItem>
          <MenuItem cursor={"pointer"} value="average-rating">
            Average rating
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
