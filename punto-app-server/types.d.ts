import { Types } from "mongoose";

namespace Models {
    interface Promocion {
        nombre: string;
        precio: number,
        producto: Types.ObjectId | Types.ObjectId[]
    }
    interface Categoria {
        nombre: string;
        imagenes: string[];
        productos: Types.ObjectId[]
    }
    interface Producto {
        nombre: string;
        imagenes: string[];
        descripcion: string;
        precio: number;
        stock: number;
        categoria: Types.ObjectId
    }
    namespace Usuario {
        interface Administrador {
            nombre: string;
            contraseña: string;
        }
        namespace Comun {
            interface Completo {
                email: string;
                contraseña: string;
                direccion: string;
        
            }
            interface Incompleto {
                email: string;
            }
        }
    }
}
namespace ExpressTypes {
    namespace Response {
        interface Producto {
            datos: any | any[];
            mensaje: string
        }
        interface Categoria {
            datos: any[] | any;
            mensaje: string;
        }
        interface Error {
            mensaje: string
        }
    }
}