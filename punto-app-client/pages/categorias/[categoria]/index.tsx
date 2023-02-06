import React from "react";
import Productos from "../../../components/productos/ProductosDeCategoria";
import { useRouter } from "next/router";
import cartucheras from "../../../public/cartucheras.jpg"
const Productos_: React.FC = () => {
    const router = useRouter()
    return <Productos imagen={cartucheras} nombre={router.query.categoria as string}/>
}
export default Productos_