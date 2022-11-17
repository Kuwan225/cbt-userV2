import { useRouter } from "next/router";
import React  from "react";
import Styles from "./Card.module.scss";

const CardJurusan = ({ item }: any) => {
  const route = useRouter();

  return (
    <div
      className={Styles.container}
      onClick={() => { 
route.push(`${item.jurusan}`)
      }}
    >
      <img src="/image/rpl.png" alt="img" />
      <h1 className={Styles.text}>{item.jurusan}</h1>
    </div>
  );
};

export default CardJurusan;
