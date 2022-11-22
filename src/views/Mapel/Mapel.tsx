import React, { useState, useEffect, useContext } from "react";
import Container from "../../layout/container/Container";
import CardMapel from "./Partials/CardMapel/CardMapel";
import axios from "axios";
import { useRouter } from "next/router";
import { PublicContext } from "../../layout/core";

const Mapel = () => {
  const [dataMapel, setDataMapel] = useState([]);

  const route = useRouter();
  const ctx = useContext(PublicContext);

  useEffect(() => {
    ctx.setIsLoading(true);
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
      .then((res) => {
        ctx.setIsLoading(false);
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
      {datas.map((res, idx) => (
        <CardMapel
          item={res}
          class={idx % 2 == 0 ? "container-left" : "container-right"}
        />
      ))}
    </Container>
  );
};

export default Mapel;
