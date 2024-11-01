import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSekelon = () => {
  return (
    <Card width="400px" borderRadius="10px" overflow="hidden">
      <Skeleton height="280px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSekelon;
