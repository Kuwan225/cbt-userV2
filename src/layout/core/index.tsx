import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface TypeContext {
  dataJurusan: string;
  setDataJurusan: (value: string) => void;

  dataKelas:string;
  setDataKelas:(value:string)=>void;

  dataMapel:string;
  setDataMapel:(value:string)=>void;
}
export const PublicContext = React.createContext<TypeContext>({
  dataJurusan: "",
  setDataJurusan: (_value: string) => {},

  dataKelas:"",
  setDataKelas:(value:string)=>{},

  dataMapel:"",
  setDataMapel:(value:string)=>{},
});

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [dataJurusan, setDataJurusan] = useState<string>("");
  const [dataKelas, setDataKelas] = useState("");
  const [dataMapel, setDataMapel] = useState("");

console.log(dataJurusan);
console.log(dataKelas);
console.log(dataMapel);

  return (
    <PublicContext.Provider
      value={{
        dataJurusan,
        setDataJurusan,
        dataKelas,
        setDataKelas,
        dataMapel,
        setDataMapel
      }}
    >
      <Component {...pageProps} />
    </PublicContext.Provider>
  );
};

export default LayoutDefault;
