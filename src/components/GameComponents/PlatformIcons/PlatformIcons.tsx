import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Platform {
  id: number;
  slug: string;
}

interface Prop {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Prop) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    "3do": FaGamepad,
    atari: FaGamepad,
    "commodore-amiga": FaGamepad,
    "neo-geo": FaGamepad,
    sega: FaGamepad,

  };

  if (!platforms) return null;

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = icons[platform.slug];
        return <IconComponent key={platform.id} color={"grey"} />;
      })}
    </HStack>
  );
};

export default PlatformIcons;
