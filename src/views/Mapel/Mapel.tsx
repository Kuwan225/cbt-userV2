import React, { useState, useEffect, useContext } from "react";
import Container from "../../layout/container/Container";
import CardMapel from "./Partials/CardMapel/CardMapel";
import axios from "axios";
import { useRouter } from "next/router";
import { PublicContext } from "../../layout/core";
import { AkX, ApX, RplX } from "../../constant/X";
import { AkXI, ApXI, RplXI } from "../../constant/XI";
import { AkXII, ApXII, RplXII } from "../../constant/XII";

const Mapel = () => {
  const [dataMapel, setDataMapel] = useState([]);

  const route = useRouter();
  const ctx = useContext(PublicContext);

  useEffect(() => {
    ctx.setIsLoading(false);
  }, []);

  useEffect(() => {
    // ctx.setIsLoading(true);
    // axios
    //   .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
    //   .then((res) => {
    //     ctx.setIsLoading(false);
    //     setDataMapel(res.data.data);
    //   });

    if (
      route.query.jurusan == "Rekayasa Perangkat Lunak" &&
      route.query.kelas == "X"
    ) {
      setDataMapel(RplX.data);
    } else if (
      route.query.jurusan == "Perhotelan" &&
      route.query.kelas == "X"
    ) {
      setDataMapel(ApX.data);
    } else if (route.query.jurusan == "Akuntansi" && route.query.kelas == "X") {
      setDataMapel(AkX.data);
    } else if (
      route.query.jurusan == "Rekayasa Perangkat Lunak" &&
      route.query.kelas == "XI"
    ) {
      setDataMapel(RplXI.data);
    } else if (
      route.query.jurusan == "Perhotelan" &&
      route.query.kelas == "XI"
    ) {
      setDataMapel(ApXI.data);
    } else if (
      route.query.jurusan == "Akuntansi" &&
      route.query.kelas == "XI"
    ) {
      setDataMapel(AkXI.data);
    } else if (
      route.query.jurusan == "Rekayasa Perangkat Lunak" &&
      route.query.kelas == "XII"
    ) {
      setDataMapel(RplXII.data);
    } else if (
      route.query.jurusan == "Perhotelan" &&
      route.query.kelas == "XII"
    ) {
      setDataMapel(ApXII.data);
    } else if (
      route.query.jurusan == "Akuntansi" &&
      route.query.kelas == "XII"
    ) {
      setDataMapel(AkXII.data);
    }
  });

  // const datas = dataMapel.filter((res: any) => {
  //   return (
  //     res.tingkatan.tingkatan == route.query.kelas &&
  //     res.jurusan.jurusan == route.query.jurusan
  //   );
  // });

  return (
    <Container>
      {dataMapel?.map((res, idx) => (
        <CardMapel
          key={idx}
          item={res}
          class={idx % 2 == 0 ? "container-left" : "container-right"}
        />
      ))}
    </Container>
  );
};

export default Mapel;
