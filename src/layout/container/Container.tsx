import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import Styles from "./Container.module.scss";
import { Alert, Spin } from "antd";
import { useContext } from "react";
import { PublicContext } from "../core";

const Container = ({ children }: any) => {
  const ctx = useContext(PublicContext);
  return (
    <div className={Styles["container-layout"]}>
      {ctx.isLoading && (
        <div className={Styles.loading}>
          <Spin tip="Loading..." />
        </div>
      )}
      <Header />
      <div className={Styles["container"]}>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
