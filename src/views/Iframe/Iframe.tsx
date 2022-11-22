import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import Container from "../../layout/container/Container";
import { PublicContext } from "../../layout/core";

const Iframe = () => {
  const [dataMapel, setDataMapel] = useState([]);
  const [dataResult, setDataResult] = useState<any>({});

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

  const datas = dataMapel?.filter((res: any) => {
    return (
      res.tingkatan.tingkatan == route.query.kelas &&
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
    <Container>
      <div style={{ height: "100vh" }}>
        <iframe
          width="100%"
          height="100%"
          src={dataResult.embedLink}
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowFullScreen
        >
          {" "}
        </iframe>
      </div>
    </Container>
  );
};

export default Iframe;
