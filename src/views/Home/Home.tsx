import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import Container from "../../layout/container/Container";
import { PublicContext } from "../../layout/core";
import CardJurusan from "./Partials/CardJurusan/CardJurusan";

const Home: NextPage = () => {
  const ctxPublic = useContext(PublicContext);

  const [dataJurusan, setDataJurusan] = useState([]);

  console.log(dataJurusan);

  useEffect(() => {
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/jurusan`)
      .then((res) => {
        setDataJurusan(res.data.data);
      });
  }, []);
  return (
    <Container>
      {dataJurusan.map((el) => {
        return <CardJurusan item={el} />;
      })}
    </Container>
  );
};

export default Home;
