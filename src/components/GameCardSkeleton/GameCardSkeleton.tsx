import { Card, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height={200}></Skeleton>
      <Card.Body>
        <Skeleton height={2} marginBottom={2} width={`90%`} />
        <Skeleton height={2} marginBottom={10} width={`80%`} />
        <Skeleton height={2} width={`60%`} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
