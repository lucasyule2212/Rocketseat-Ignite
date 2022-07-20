import { Router } from "next/router";
import React, { ReactElement } from "react";
import routes, { titleRoutes } from "../../utils/routes";
import Layout from "../Layout";

// import { Container } from './styles';

type CustomRoutesProps = {
  children: ReactElement;
  router: Router;
};

const RouteManager: React.FC<CustomRoutesProps> = ({ children, router }) => {
  const completeRouteFunc = () => {

    if (router.route.split("/").length > 2) {
      const queryName = router.route.split("/")[2].replace(/[[\]]/g, "");
      const query = router.query[queryName];

      const routeName = router.route.split("/")[1];
      return "/" + routeName + "/" + query;
    } else {
      return router.route;
    }
  };

  const completeRoute = completeRouteFunc();

  const titleRoute = Object.entries(routes).find((route) => {
    const routePath = route[1];

    return route[0] !== "LOGIN" && completeRoute === routePath;
  });

  return <Layout title={titleRoutes[titleRoute?.[0]]}>{children}</Layout>;
};

export default RouteManager;
