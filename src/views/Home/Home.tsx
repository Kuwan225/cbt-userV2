import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import Container from "../../layout/container/Container";
import { PublicContext } from "../../layout/core";
import CardJurusan from "./Partials/CardJurusan/CardJurusan";

const Home: NextPage = () => {
  // const [dataJurusan, setDataJurusan] = useState([]);
  // const ctx = useContext(PublicContext);

  // useEffect(() => {
  //   ctx.setIsLoading(true);
  //   axios
  //     .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/jurusan`)
  //     .then((res) => {
  //       setDataJurusan(res.data.data);
  //       ctx.setIsLoading(false);
  //     });
  // }, []);

  const dataJurusan = [
    {
      jurusan: "Rekayasa Perangkat Lunak",
    },
    {
      jurusan: "Perhotelan",
    },
    {
      jurusan: "Akuntansi",
    },
  ];
  return (
    <Container>
      {dataJurusan.map((el, idx) => {
        return <CardJurusan key={idx} item={el} />;
      })}
    </Container>
  );
};

export default Home;
