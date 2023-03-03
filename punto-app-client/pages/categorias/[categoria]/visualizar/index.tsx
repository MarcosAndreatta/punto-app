import React from "react";
import { useRouter } from "next/router";
const VisualizarCategoria: React.FC = () => {
    const router = useRouter();
    console.log(router.query)
    return <h1>Hi</h1>
};
export default VisualizarCategoria