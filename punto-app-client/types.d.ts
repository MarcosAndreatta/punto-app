import { StaticImageData } from "next/image";

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
        interface backDrop {
            visible: boolean
        }
    }
}
namespace Payloads {
    namespace InterfazGrafica {
        type backDrop = boolean;
    }
}
namespace Entidades {
    interface usuario {
        eMail: string;
        contraseña: string | null; //Verificar el tipo para contraseña
        direccion: string;
        productosComprados: string[]; //Array de productos
    }
    interface producto {
        nombre: string;
        imagenes: StaticImageData[];
        descripcion: string;
        precio: number;
        stock: number
    }
    interface categoria {
        nombre: string;
        imagenes: StaticImageData[];
        productos: Entidades.producto[]
    }
}
namespace Responses {
    type ObjectId = string;
    interface Producto {
        datos: Array<{
            _id: string;
            nombre: string;
            imagenes: string[];
            descripcion: string;
            precio: number;
            stock: number;
            categoria: ObjectId;
        }>;
        mensaje: string;
    }
    interface Categoria {
        datos: Array<{
            _id: string;
            nombre: string;
            imagenes: string[];
            productos: ObjectId[];
        }>;
        mensaje: string
    }
}