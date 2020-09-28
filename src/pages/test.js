/* eslint-disable */
import React, { useEffect } from "react";


import { ArrowRight32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import { Helmet } from "react-helmet";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import { navigate } from "gatsby";
import pictogram from "../images/carbon-pictogram-gradient.png";
import style from "./landing.module.scss";
import { useAuth } from "../util/hooks/use-auth.js";

const Access = () => {
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
               Log in with OAuth2 to view and apply for  access to the Freight Trust Network.
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
);


    <ModalWrapper
      id="input-modal"
      handleSubmit={() => {
        action('onSubmit')();
        return true;
      }}
      {...props()}>
      <TextInput
        id="test2"
        placeholder="Hint text here"
        labelText="Text Input:"
      />
      <br />
      <Select id="select-1" labelText="Select">
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Pick an option"
        />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>
      <br />
      <RadioButtonGroup
        name="radio-button-group"
        defaultSelected="default-selected">
        <RadioButton
          value="default-selected"
          id="radio-1"
          labelText="Radio Button label 1"
          className="some-class"
        />
        <RadioButton
          value="standard"
          labelText="Radio Button label 2"
          id="radio-2"
          className="some-class"
        />
        <RadioButton
          value="disabled"
          labelText="Radio Button label 3"
          id="radio-3"
          className="some-class"
          disabled
        />
      </RadioButtonGroup>
    </ModalWrapper>
  );
  

    </Layout>
  );
};

export default Access;
