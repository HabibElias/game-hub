import useGameQuery from "@/hooks/useGameQuery";
import SortMenu from "@/models/sort_menu";
import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

const PlatformSelector = () => {
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

  const onSelectedSort = useGameQuery((s) => s.selectOrder);
  
  const selectedOrderName = useGameQuery((s) => s.ordering);
  const selectedMenu = menus.find((m) => m.value === selectedOrderName);

  return (
    <Box position={"relative"} zIndex={1}>
      <MenuRoot positioning={{ placement: "right" }}>
        <MenuTrigger asChild colorPalette={"purple"}>
          <Button variant="outline" size="xl" fontFamily={"Poppins"}>
            Order by: {selectedMenu?.label || ""}
          </Button>
        </MenuTrigger>
        <MenuContent
          position={"absolute"}
          width={"max-content"}
          fontFamily={"Poppins"}
          marginTop={3}
        >
          <MenuItem
            key={0}
            onClick={() => onSelectedSort()}
            cursor={"pointer"}
            value={""}
          >
            None <MenuItemCommand>0</MenuItemCommand>
          </MenuItem>
          {menus.map((menu) => (
            <MenuItem
              key={menu.id}
              onClick={() => onSelectedSort(menu.value)}
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
