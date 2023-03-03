import { useAppDispatch } from "../reduxStore/customizedHooks";
import { informadorActions } from "../reduxStore/slices/interfazGrafica/informador";
import axios from "axios";
type comando = "get" | "post" | "delete" | "patch" | "indizarBuscador";
const useHttp = () => {
    const dispatcher = useAppDispatch()
    const funcionConfiguradora = async (comando: comando, url: string, data?: any) => {
        switch (comando) {
            case "get":
                try {
                    const response = await axios.get(url);
                    dispatcher(informadorActions.informarFueExitoso({mensaje: response.data.mensaje, visibilidad: true}))
                } catch (e: any) {
                    dispatcher(informadorActions.informarError({mensaje: e.response.data.mensaje as string, visibilidad: true}))
                }
                break;
            case "post":
                break;
            case "delete":
                break;
            case "patch":
                break;
            case "indizarBuscador":
                try {
                    const response = await axios.get(url);
                    //dispatcher(informadorActions.informarFueExitoso({mensaje: response.data.mensaje, visibilidad: true}))
                } catch (e: any) {
                    dispatcher(informadorActions.informarError({mensaje: e.response.data.mensaje as string, visibilidad: true}))
                }
        }
    }
    return funcionConfiguradora
    
    
};
export default useHttp


