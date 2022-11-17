import React, { useState, useEffect } from "react";
import Container from "../../layout/container/Container";
import CardKelas from "./Partials/CardKelas/CardKelas";
import { useRouter } from "next/router";
import axios from "axios";
import Jumbotron from "./Partials/Jumbotron/Jumbotron";

const Kelas = () => {
  const route = useRouter();
  console.log(route.query.id);

  const [dataTingkatan, setDataTingkatan] = useState([]);

  console.log(dataTingkatan);

  useEffect(() => {
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/tingkatan`)
      .then((res) => {
        setDataTingkatan(res.data.data);
      });
  }, []);

  return (
    <Container>
      <Jumbotron/>
      <div style={{ display: "flex", gap: 20,flexWrap:'wrap',justifyContent:"center" }}>
        {dataTingkatan.map((res) => {
          return <CardKelas item={res} />;
        })}
      </div>
    </Container>
  );
};

export default Kelas;
