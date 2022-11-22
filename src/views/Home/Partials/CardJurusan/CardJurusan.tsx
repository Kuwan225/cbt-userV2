import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PublicContext } from "../../../../layout/core";
import Styles from "./Card.module.scss";

const CardJurusan = ({ item }: any) => {
  const route = useRouter();
  const ctx = useContext(PublicContext);
  return (
    <Link href={`${item.jurusan}`}>
      <div
        className={Styles.container}
        onClick={() => {
          ctx.setIsLoading(true);
        }}
      >
        <img src="/image/rpl.png" alt="img" />
        <h1 className={Styles.text}>{item.jurusan}</h1>
      </div>
    </Link>
  );
};

export default CardJurusan;
