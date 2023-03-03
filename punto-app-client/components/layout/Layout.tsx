import React from "react";
import Informador from "./components/Informador";
import Navbar_ from "./components/Navbar";

import PiePagina from "./components/PieDePagina";
//Type definition for props
interface layoutProps {
    children: JSX.Element
};

const Layout: React.FC<layoutProps> = (props) => {
    return <React.Fragment>
        <Navbar_ />
        {/* All the stuff will come here */}
        {props.children}
        <Informador />
        <PiePagina />
    </React.Fragment>
};
export default Layout