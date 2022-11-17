import React, { useState, useEffect, useContext } from "react";
import Container from "../../layout/container/Container";
import CardMapel from "./Partials/CardMapel/CardMapel";
import axios from "axios";
import { useRouter } from "next/router";

const Mapel = () => {
  const [dataMapel, setDataMapel] = useState([]);

  const route = useRouter()

  useEffect(() => {
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
      .then((res) => {
        setDataMapel(res.data.data);
      });
  }, []);

  const datas = dataMapel.filter((res: any) => {
    return (
      res.tingkatan.tingkatan == route.query.kelas &&
      res.jurusan.jurusan == route.query.jurusan
    );
  });

  return (
    <Container>
      {datas.map((res) => (
        <CardMapel item={res} />
      ))}
    </Container>
  );
};

export default Mapel;
