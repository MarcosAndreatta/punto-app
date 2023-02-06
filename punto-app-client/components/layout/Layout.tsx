import React from "react";
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
        <PiePagina />
    </React.Fragment>
};
export default Layout