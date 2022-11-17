import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Iframe = () => {

  const [dataMapel, setDataMapel] = useState([]);

  const [dataResult,setDataResult] = useState<any>({})


  const route = useRouter()
  
  useEffect(() => {
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
      .then((res) => {
        setDataMapel(res.data.data);
      });
  }, []);

  const datas = dataMapel?.filter((res: any) => {
    return (
      res.tingkatan.tingkatan == route.query.kelas &&
      res.jurusan.jurusan == route.query.jurusan && res.mapel.namaMapel == route.query.mapel
    );
  });
useEffect(()=>{
datas.map((res)=>{
  setDataResult(res)
})
},[datas])

  console.log(dataResult);
  
  return (
    <div style={{width:"100%",height:"100vh"}}>
        <h1 style={{textAlign:'center'}}>SMK YADIKA SOREANG CBT</h1>
        <iframe width="100%" height="100%" src={dataResult.embedLink} frameBorder="0" marginWidth={0} marginHeight={0} style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowFullScreen> </iframe>
    </div>
  )
}

export default Iframe