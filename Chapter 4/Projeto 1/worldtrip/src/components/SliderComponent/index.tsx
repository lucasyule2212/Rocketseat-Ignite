import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from "next/router";

// import { Container } from './styles';

export const continents = [
  {
    name: "Europa",
    id: "europa",
    image: "/europa.png",
    description: "O continente mais antigo!",
  },
  {
    name: "África",
    id: "africa",
    image: "/africa.jpg",
    description: "Onde tudo começou...",
  },
  {
    name: "América do Norte",
    id: "america_do_norte",
    image: "/northAmerica.jpg",
    description: "Belezas estonteantes!",
  },
  {
    name: "América do Sul",
    id: "america_do_sul",
    image: "/southAmerica.jpg",
    description: "Um mar de cultura e tradições!",
  },
  {
    name: "Ásia",
    id: "asia",
    image: "/asia.jpg",
    description: "Descubra os mistérios asiáticos.",
  },
  {
    name: "Oceania",
    id: "oceania",
    image: "/oceania.jpg",
    description: "O continente isolado.",
  },
];

const SliderComponent: React.FC = () => {
  const router = useRouter();

  return (
    <Box w="100vw" h={500} p={8} my={6}>
      <Heading w="100%" textAlign="center" color="gray.600" mb={6}>
        Vamos nessa? <br />
        então escolha seu continente!
      </Heading>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              bgImage={continent.image}
              bgSize="cover"
              color="white"
              direction="column"
              onClick={() => {
                router.push(`/continentes/${continent.id}`);
              }}
            >
              <Heading mb={4} size="3xl">
                {continent.name}
              </Heading>
              <Text>{continent.description}</Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderComponent;
