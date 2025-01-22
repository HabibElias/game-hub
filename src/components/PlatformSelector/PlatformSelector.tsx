import useData from "@/hooks/useData";
import GameQuery from "@/models/game_query";
import Platform from "@/models/platform";
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
  const { data, error, isLoading } = useData<Platform>(
    "/platforms/lists/parents"
  );

  if (error || isLoading) return null;
  return (
    <Box margin={"28px"} position={"relative"} zIndex={1}>
      <MenuRoot positioning={{ placement: "right" }}>
        <MenuTrigger asChild colorPalette={"purple"}>
          <Button variant="outline" size="xl" fontFamily={"Poppins"}>
            {gameQuery.platform?.name || "Platform"}
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"} marginTop={3}>
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
