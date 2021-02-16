import React, { useEffect } from "react";

import { ArrowRight32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import { Helmet } from "react-helmet";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import { navigate } from "gatsby";
import pictogram from "../images/freight.png";
import style from "./landing.module.scss";
import { useAuth } from "../util/hooks/use-auth.js";

const Landing = () => {
  const { login, token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/badges", {
        replace: true,
      });
    }
  }, [token]);

  return (
    <Layout homepage>
      <Helmet title="Freight Trust Access Page" />
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <div class="bx--col-lg-8 bx--col-md-7">
            <h1 className={style.heading}>
              Freight Trust Network Services
              <br />{" "}
              <a href="https://www.freighttrust.com/services/as2/overview">
                AS2 Network
              </a>
              ,{" "}
              <a href="https://www.freighttrust.com/services/edi/overview">
                EDI Service
              </a>
              , and{" "}
              <a href="https://www.freighttrust.com/services/customs/overview">
                Customs
              </a>{" "}
              Log in with OAuth2 to view and apply for access to the Freight
              Trust Network.
            </h1>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col-lg-3">
            <Button
              className={style.button}
              kind="primary"
              onClick={() => login()}
              renderIcon={ArrowRight32}
              type="button"
            >
              Log in with OAuth2
            </Button>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col">
            <p className={style.copy}>
              Don't have a OAuth2 account? Use GitHub{" "}
              <a href="https://github.com/join">Join GitHub</a>
            </p>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--offset-lg-10 bx--col-lg-2 bx--offset-md-6 bx--col-md-2 bx--offset-sm-3 bx--col-sm-1">
            <img
              className={style.pictogram}
              src={pictogram}
              alt="Carbon pictogram"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
