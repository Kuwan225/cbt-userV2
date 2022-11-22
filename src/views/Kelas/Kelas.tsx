import React, { useState, useEffect, useContext } from "react";
import Container from "../../layout/container/Container";
import CardKelas from "./Partials/CardKelas/CardKelas";
import { useRouter } from "next/router";
import axios from "axios";
import Jumbotron from "./Partials/Jumbotron/Jumbotron";
import { PublicContext } from "../../layout/core";

const Kelas = () => {
  const [dataTingkatan, setDataTingkatan] = useState([]);
  const route = useRouter();
  const ctx = useContext(PublicContext);

  useEffect(() => {
    ctx.setIsLoading(true);
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/tingkatan`)
      .then((res) => {
        ctx.setIsLoading(false);
        setDataTingkatan(res.data.data);
      });
  }, []);

  return (
    <Container>
      <Jumbotron />
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {dataTingkatan.map((res) => {
          return <CardKelas item={res} />;
        })}
      </div>
    </Container>
  );
};

export default Kelas;
