import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function ContinentData({
  value,
  title,
}: {
  value: number;
  title: string;
}) {
  return (
    <Flex flexDir="column" align={"center"} justify={"center"} w={100}>
      <Heading fontSize="3xl" color="yellow.500">
        {value}
      </Heading>
      <Heading fontSize="xl" color="gray.500">
        {title}
      </Heading>
    </Flex>
  );
}
