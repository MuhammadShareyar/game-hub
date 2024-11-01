import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSekelon = () => {
  return (
    <Card>
      <Skeleton height="280px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSekelon;
