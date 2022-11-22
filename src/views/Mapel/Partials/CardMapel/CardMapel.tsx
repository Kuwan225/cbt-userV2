import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import Styles from "./Card.module.scss";
import { BsClockHistory } from "react-icons/bs";
import { PublicContext } from "../../../../layout/core";

const CardMapel = (props: any) => {
  const [onHover, setOnHover] = useState(false);
  const route = useRouter();
  const ctx = useContext(PublicContext);

  return (
    <Link
      href={{
        pathname: `/[jurusan]/[kelas]/[mapel]`,
        query: {
          jurusan: route.query.jurusan,
          kelas: route.query.kelas,
          mapel: props.item.mapel.namaMapel,
        },
      }}
    >
      <div
        className={Styles[`${props.class}`]}
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onClick={() => ctx.setIsLoading(true)}
      >
        <div
          className={Styles.boxImage}
          style={{
            backgroundColor: onHover ? "white" : "gray",
            transition: ".3s",
          }}
        >
          {onHover ? (
            <img
              src="/image/book.png"
              alt="logo"
              className={Styles["book-on"]}
            />
          ) : (
            <img
              src="/image/booxOff.png"
              alt="logo"
              className={Styles["book-off"]}
            />
          )}
        </div>
        <div className={Styles.box}>
          <p>{props.item.mapel.namaMapel}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span>
              <BsClockHistory />
            </span>
            <span>90 min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMapel;
