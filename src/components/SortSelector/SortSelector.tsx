import GameQuery from "@/models/game_query";
import SortMenu from "@/models/sort_menu";
import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuItemCommand,
  MenuTrigger,
} from "@chakra-ui/react/menu";

interface Props {
  gameQuery: GameQuery;
  onSelectedSort: (sortSelection: GameQuery) => void;
}

const PlatformSelector = ({ gameQuery, onSelectedSort }: Props) => {
  const menus: SortMenu[] = [
    { id: 1, value: "name", label: "Name" },
    { id: 2, value: "released", label: "Released" },
    { id: 3, value: "added", label: "Date added" },
    { id: 4, value: "created", label: "Date created" },
    { id: 5, value: "updated", label: "Date updated" },
    { id: 6, value: "rating", label: "Rating" },
    { id: 7, value: "metacritic", label: "Metacritic" },
    { id: 8, value: "-name", label: "R-Name" },
    { id: 9, value: "-released", label: "R-Released" },
    { id: 10, value: "-added", label: "R-Date added" },
    { id: 11, value: "-created", label: "R-Date created" },
    { id: 12, value: "-updated", label: "R-Date updated" },
    { id: 13, value: "-rating", label: "R-Rating" },
    { id: 14, value: "-metacritic", label: "R-Metacritic" },
  ];

  return (
    <Box margin={"28px"} position={"relative"} zIndex={1}>
      <MenuRoot positioning={{ placement: "right" }}>
        <MenuTrigger asChild colorPalette={"purple"}>
          <Button variant="outline" size="xl" fontFamily={"Poppins"}>
            Order by: {gameQuery.ordering?.label || ""}
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"} fontFamily={"Poppins"} marginTop={3}>
          {menus.map((menu) => (
            <MenuItem
              key={menu.id}
              onClick={() => onSelectedSort({ ...gameQuery, ordering: menu })}
              cursor={"pointer"}
              value={menu.value}
            >
              {menu.label} <MenuItemCommand>{menu.id}</MenuItemCommand>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
