import { SimpleGrid, Box, GridItem, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function ContinentCountries({
  nome,
  imagem,
  pais,
  bandeira,
}: {
  nome: string;
  imagem: string;
  pais: string;
  bandeira: string;
}) {

  return (
    <Box
      width={300}
      height={350}
      margin={10}
      shadow="base"
      padding={4}
      borderRadius="base"
    >
      <SimpleGrid
        row={2}
        templateRows="2fr 1fr"
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          {imagem && (
            <Image
              src={imagem}
              layout="fixed"
              width={280}
              height={200}
              alt={nome}
            />
          )}
        </GridItem>
        <GridItem>
          <Flex align="center" justify="space-between">
            <Flex flexDir="column">
              <Heading fontSize="3xl" color="yellow.500">
                {nome}
              </Heading>
              <Heading fontSize="xl" color="gray.500">
                {pais}
              </Heading>
            </Flex>
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: 30,
                height: 30,
              }}
            >
              {bandeira && (
                <Image
                  src={bandeira}
                  layout="fixed"
                  width={30}
                  height={30}
                  alt={pais}
                  objectFit="cover"
                />
              )}
            </div>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
