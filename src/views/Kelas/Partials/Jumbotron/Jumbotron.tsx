import React from 'react'
import Styles from "./Jumbotron.module.scss"

const Jumbotron = () => {
  return (
    <div className={Styles.container}>
        <img src="/image/kelas.png" alt="img" />
        <h1>Pilih tingkatan kamu yang sesuai agar dapat mengerjakan soal dengan baik dan benar</h1>
    </div>
  )
}

export default Jumbotron