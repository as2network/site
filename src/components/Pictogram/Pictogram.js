import React from "react";
import pictogram from "../../images/freight-trust.svg";
import style from "./Pictogram.module.scss";

const Pictogram = () => {
  return (
    <div className={style.container}>
      <img className={style.pictogram} src={pictogram} alt="Carbon pictogram" />
    </div>
  );
};

export default Pictogram;
