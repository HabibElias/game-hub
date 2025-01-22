import { HStack, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton marginRight={2} borderRadius="8px" boxSize={"32px"} />
      <Skeleton marginRight={2} width={10} height={2}></Skeleton>
      <Skeleton width={6} height={6}></Skeleton>
    </HStack>
  );
};

export default GenreSkeleton;
