import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";
import helper from "../../utils/helper";

// import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }: LayoutProps) => {
  const Title: React.FC = () => (
    <Head>
      <title>
        {title} | {helper.PORTAL_NAME}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );

  return (
    <Flex direction="column" height="100vh" overflowX="hidden">
      <Title />
      <Flex>
        <section className="home-section">{children}</section>
      </Flex>
    </Flex>
  );
};

export default Layout;
