import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import Styles from "./Container.module.scss"

const Container = ({children}:any)=>{
    return(
        <div className={Styles["container-layout"]}>
            <Header/>
            <div className={Styles["container"]}>
            {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Container;