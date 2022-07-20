import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Continent } from "../../utils/mirage";
import ContinentData from "../../components/ContinentData/ContinentData";
import ContinentCountries from "../../components/ContinentData/ContinentCountries";

export default function Continente() {
  const router = useRouter();
  const continentId = router.query.continentId;
  const [continent, setContinent] = useState<Continent>({
    id: "",
    nome: "",
    data: {
      cidades: 0,
      descricao: "",
      linguas: 0,
      paises: 0,
      cidades_data: [
        {
          nome: "",
          bandeira_pais: "",
          imagem: "",
          pais: "",
        },
      ],
    },
    imagem: "",
  });

  useEffect(() => {
    try {
      async function fetchContinentData() {
        const response = await fetch("/api/continents/" + continentId);
        const { continent } = await response.json();

        setContinent(continent);
      }
      if (continentId) {
        fetchContinentData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [continentId]);

  return (
    <Box width="100%"  overflow="auto">
      <Header />
      <Flex
        p={14}
        align="end"
        w="100%"
        h="350px"
        bgImage={continent?.imagem}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Heading textShadow="md" color="white">
          {continent?.nome}
        </Heading>
      </Flex>
      <Flex w="100%" justifyContent="center" flexDirection="column" align='center'>
        <SimpleGrid
          columns={2}
          margin={4}
          padding={4}
          w="80%"
          alignSelf="center"
        >
          <GridItem
            display="flex"
            alignItems="center"
            h={250}
            textAlign="justify"
          >
            {continent?.data.descricao}
          </GridItem>
          <GridItem display="flex" justifyContent="center" h={250}>
            <Stack gap={10} direction="row">
              <ContinentData title="países" value={continent.data.paises} />
              <ContinentData title="línguas" value={continent.data.linguas} />
              <ContinentData
                title="cidades+100"
                value={continent.data.cidades}
              />
            </Stack>
          </GridItem>
        </SimpleGrid>
        <Heading fontSize='3xl' color='gray.700'>Cidades +100</Heading>
        <Stack marginLeft={20} gap={10} direction="row" align='center'>
          {continent?.data.cidades_data.map((pais) => (
            <ContinentCountries
              key={pais.nome}
              nome={pais.nome}
              imagem={pais.imagem}
              pais={pais.pais}
              bandeira={pais.bandeira_pais}
            />
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
