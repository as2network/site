import React, { useEffect } from "react";

import { ArrowRight32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import { Helmet } from "react-helmet";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import { navigate } from "gatsby";
import pictogram from "../images/carbon-pictogram-gradient.png";
import style from "./landing.module.scss";
import { useAuth } from "../util/hooks/use-auth.js";

// import style from "./pages.module.scss";


const Login = () => {
  const { login } = useAuth();

  useEffect(() => {
    login();
  }, [login]);
  return (
    <Layout homepage><p className={style.copy}>Logging in...</p>;  </Layout>
	);
};

export default Login;
