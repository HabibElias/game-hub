import {
  Button,
  Drawer,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import GenreList from "../GenreComponents/GenreList";

const DrawerGenre = () => {
  return (
    <Drawer.Root>
      <DrawerTrigger asChild hideFrom={"lg"}>
        <Button variant="outline" size="sm">
          <HiMenu />
        </Button>
      </DrawerTrigger>
      <DrawerBackdrop />
      <DrawerContent position={"fixed"} top={0} left={0}>
        <DrawerHeader>
          <DrawerTitle>Genres</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <GenreList />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </Drawer.Root>
  );
};

export default DrawerGenre;
