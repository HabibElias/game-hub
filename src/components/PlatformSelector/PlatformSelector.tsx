import useGameQuery from "@/hooks/useGameQuery";
import usePlatform from "@/hooks/usePlatform";
import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";


const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform();
  const onSelectedPlatform = useGameQuery((s) => s.selectPlatform);
  const selectedPlatformId = useGameQuery((s) => s.platformId);

  const platformName = data.results?.find(
    (p) => p.id == selectedPlatformId
  )?.name;

  if (error || isLoading) return null;
  return (
    <Box position={"relative"} zIndex={1}>
      <MenuRoot positioning={{ placement: "right" }}>
        <MenuTrigger asChild colorPalette={"purple"}>
          <Button variant="outline" size="xl" fontFamily={"Poppins"}>
            {platformName || "Platform"}
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"} width={"max-content"} marginTop={3}>
          <MenuItem
            key={0}
            value={""}
            fontFamily={"Poppins"}
            cursor={"pointer"}
            textDecoration={selectedPlatformId == null ? "underline" : "none"}
            onClick={() => onSelectedPlatform(undefined)}
          >
            All
            <MenuItemCommand>0</MenuItemCommand>
          </MenuItem>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              fontFamily={"Poppins"}
              cursor={"pointer"}
              textDecoration={
                selectedPlatformId == platform.id ? "underline" : "none"
              }
              onClick={() => onSelectedPlatform(platform.id)}
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
