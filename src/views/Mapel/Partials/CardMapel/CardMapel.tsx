import Card from "antd/lib/card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./Card.module.scss"

const CardMapel = ({ item }: any) => {
  const route = useRouter();

  return (
    <Link href={{pathname:`/[jurusan]/[kelas]/[mapel]`,query:{
      jurusan:route.query.jurusan,kelas:route.query.kelas,mapel:item.mapel.namaMapel
    }}}>
    <div
    className={Styles.container}
    >
      <div className={Styles.boxImage}>
      <img src="/image/book.png" alt="logo" className={Styles['book-on']}/>
      <img src="/image/booxOff.png" alt="logo" className={Styles['book-off']}/>
      </div>
      <div className={Styles.box}>
      <p>{item.mapel.namaMapel}</p>
      <p>90 min</p>
      </div>
    </div>
    </Link>
  );
};

export default CardMapel;
