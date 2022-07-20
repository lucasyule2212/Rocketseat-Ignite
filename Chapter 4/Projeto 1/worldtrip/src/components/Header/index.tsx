import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo.png";
import { useRouter } from "next/router";
// import { Container } from './styles';

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Flex justify="center" align="center" bg="white" w="100vw" p={4}>
      <Box w="180px">
        <Image
          src="/Logo.png"
          alt="WorldTrip Logo"
          onClick={() => router.push("/")}
          _hover={{ cursor: "pointer" }}
        />
      </Box>
    </Flex>
  );
};

export default Header;
