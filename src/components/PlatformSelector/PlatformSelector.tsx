import usePlatform from "@/hooks/usePlatform";
import GameQuery from "@/models/game_query";
import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

interface Props {
  gameQuery: GameQuery;
  onSelectedPlatform: (genre: GameQuery) => void;
}

const PlatformSelector = ({ gameQuery, onSelectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform();

  if (error || isLoading) return null;
  return (
    <Box position={"relative"} zIndex={1}>
      <MenuRoot positioning={{ placement: "right" }}>
        <MenuTrigger asChild colorPalette={"purple"}>
          <Button variant="outline" size="xl" fontFamily={"Poppins"}>
            {gameQuery.platform?.name || "Platform"}
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"} width={"max-content"} marginTop={3}>
          <MenuItem
            key={0}
            value={""}
            fontFamily={"Poppins"}
            cursor={"pointer"}
            textDecoration={gameQuery.platform == null ? "underline" : "none"}
            onClick={() => onSelectedPlatform({ ...gameQuery, platform: null })}
          >
            All
            <MenuItemCommand>0</MenuItemCommand>
          </MenuItem>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              fontFamily={"Poppins"}
              cursor={"pointer"}
              textDecoration={
                gameQuery.platform?.id == platform.id ? "underline" : "none"
              }
              onClick={() => onSelectedPlatform({ ...gameQuery, platform })}
            >
              {platform.name}
              <MenuItemCommand>{platform.id}</MenuItemCommand>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
