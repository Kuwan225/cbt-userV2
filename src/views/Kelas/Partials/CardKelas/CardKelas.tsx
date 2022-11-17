import Card from "antd/lib/card/Card";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./Card.module.scss";

const CardKelas = ({ item }: any) => {
  const route = useRouter();
  return (
      <Card
        onClick={() => {
          route.push(`${route.query.jurusan}/${item.tingkatan}`)
        }}
        className={Styles.container}
        style={{
          cursor: "pointer",
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 25,
        }}
      >
        {item.tingkatan}
      </Card>
  );
};

export default CardKelas;
