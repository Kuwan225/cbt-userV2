import React from "react";
import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles["container-footer"]}>
      <p>
        Powered by Team{" "}
        <span style={{ fontWeight: 700 }}>Teaching Factory</span>
      </p>
      <img src="/image/logoYdx.png" alt="logo" />
    </div>
  );
};

export default Footer;
