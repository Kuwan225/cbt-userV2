import Card from "antd/lib/card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PublicContext } from "../../../../layout/core";
import Styles from "./Card.module.scss";

const CardKelas = ({ item }: any) => {
  const route = useRouter();
  const ctx = useContext(PublicContext);

  return (
    <Link href={`${route.query.jurusan}/${item.tingkatan}`}>
      <Card
        onClick={() => {
          ctx.setIsLoading(true);
        }}
        className={Styles.container}
      >
        {item.tingkatan}
      </Card>
    </Link>
  );
};

export default CardKelas;
