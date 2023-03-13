import { StaticImageData } from "next/image";
type ObjectId = string;
namespace States {
    namespace InterfazGrafica {
        interface navBar {
            "bg-white": boolean;
            "bg-dark": boolean;
            "navbar-dark": boolean;
            "navbar-translucida": boolean
            visibility: boolean;
            estaEnZonaOscura: boolean;
            estaExpandida: boolean
        }
        interface Informador {
            mensaje: string;
            esVisible: boolean;
            variante: "info" | "warning" | "danger" | "success" | null
        }
    }
}
namespace Payloads {
    namespace InterfazGrafica {
        interface Informador {
            visibilidad: boolean;
            mensaje: string;
            //variante: "info" | "warning" | "danger" | "success" | null
        }
    }
}
namespace Entidades {
    type url = string;
    interface Usuario {
        _id: ObjectId;
        eMail: string;
        contraseña: string | null; //Verificar el tipo para contraseña
        direccion: string;
        productosComprados: string[]; //Array de productos
    }
    interface Producto {
        _id: ObjectId;
        nombre: string;
        imagenes: url[];
        descripcion: string;
        precio: number;
        stock: number;
        categoria: Categoria;
        __v: number
    }
    interface Categoria {
        _id: ObjectId;
        nombre: string;
        imagenes: url[];
        productos: Entidades.producto[] | ObjectId[];
        __v:number
    }
}
namespace Responses {
    
    interface Productos {
        datos: Array<Producto>;
        mensaje: string;
    }
    interface Categorias {
        datos: Array<Categoria>;
        mensaje: string
    }
}