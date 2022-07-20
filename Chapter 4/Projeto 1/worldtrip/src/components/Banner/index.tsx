import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Flex
      bgImage="/Banner.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100vw"
      h={350}
      p={6}
      align="center"
    >
      <Flex direction="column" gap={8} ml="130px">
        <Text fontSize="3xl" color={useColorModeValue("white", "gray.900")}>
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize="md" color={useColorModeValue("gray.200", "gray.900")} F>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Banner;
