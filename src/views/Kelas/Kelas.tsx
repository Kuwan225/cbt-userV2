import React, { useState, useEffect, useContext } from "react";
import Container from "../../layout/container/Container";
import CardKelas from "./Partials/CardKelas/CardKelas";
import { useRouter } from "next/router";
import axios from "axios";
import Jumbotron from "./Partials/Jumbotron/Jumbotron";
import { PublicContext } from "../../layout/core";

const Kelas = () => {
  // const [dataTingkatan, setDataTingkatan] = useState([]);
  // const route = useRouter();
  const ctx = useContext(PublicContext);

  useEffect(() => {
    ctx.setIsLoading(false);
    // axios
    //   .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/tingkatan`)
    //   .then((res) => {
    //     ctx.setIsLoading(false);
    //     setDataTingkatan(res.data.data);
    //   });
  }, []);

  const dataTingkatan = [
    {
      tingkatan: "X",
    },
    {
      tingkatan: "XI",
    },
    {
      tingkatan: "XII",
    },
  ];

  return (
    <Container>
      <Jumbotron />
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {dataTingkatan.map((res, idx) => {
          return <CardKelas key={idx} item={res} />;
        })}
      </div>
    </Container>
  );
};

export default Kelas;
