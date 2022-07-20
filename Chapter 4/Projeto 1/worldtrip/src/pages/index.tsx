import { Box, Image, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SliderComponent from "../components/SliderComponent";
import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <Box width="100%" height="1350" overflow="auto">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider color="gray.800" />
      <SliderComponent />
    </Box>
  );
};

export default Home;
