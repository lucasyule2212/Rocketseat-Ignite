import { Box, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';
const travelTypes = [
  {
    title: "vida noturna",
    src: "/cocktail 1.png",
  },
  {
    title: "praia",
    src: "/surf 1.png",
  },
  {
    title: "moderno",
    src: "/building 1.png",
  },
  {
    title: "clássico",
    src: "/museum 1.png",
  },
  {
    title: "e mais...",
    src: "/earth 1.png",
  },
];

const TravelTypes: React.FC = () => {
  return (
    <Flex mt={20} p={6} w="100%" justify="space-evenly" align="center" >
        {travelTypes.map((travelType) => (
          <Flex key={travelType.title} direction="column" align='center' w="150px" gap={5}>
            <Image src={travelType.src} alt={travelType.title} />
            <Text color="gray.500">
              <strong>{travelType.title}</strong>
            </Text>
          </Flex>
        ))}
      
    </Flex>
  );
};

export default TravelTypes;
