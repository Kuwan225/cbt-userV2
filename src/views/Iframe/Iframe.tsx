import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import Container from "../../layout/container/Container";
import { PublicContext } from "../../layout/core";

import { AkX, ApX, RplX } from "../../constant/X";
import { AkXI, ApXI, RplXI } from "../../constant/XI";
import { AkXII, ApXII, RplXII } from "../../constant/XII";

const Iframe = () => {
  const [dataMapel, setDataMapel] = useState([]);
  const [dataResult, setDataResult] = useState<any>({});

  const route = useRouter();
  // const ctx = useContext(PublicContext);

  // useEffect(() => {
  //   ctx.setIsLoading(true);
  //   axios
  //     .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
  //     .then((res) => {
  //       ctx.setIsLoading(false);
  //       setDataMapel(res.data.data);
  //     });
  // }, []);

  useEffect(() => {
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

  const datas = dataMapel.filter((res: any) => {
    return (
      res.tingkatan == route.query.kelas &&
      res.jurusan.jurusan == route.query.jurusan &&
      res.mapel.namaMapel == route.query.mapel
    );
  });

  useEffect(() => {
    datas.map((res) => {
      setDataResult(res);
    });
  }, [datas]);

  return (
    <div style={{ height: "100vh" }}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          background: "linear-gradient(91.33deg, #0a85ed 1.3%, #08b7f6 99.05%)",
          padding: "20px",
        }}
      >
        SMK YADIKA SOREANG <span style={{ fontWeight: "bold" }}>CBT</span>
      </h1>
      <div style={{ height: "100%", padding: "0 20px" }}>
        <iframe
          width="100%"
          height="100%"
          src={dataResult.embedLink}
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Iframe;
