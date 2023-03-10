import cartuchera1 from "../public/tarjetasDeCategorias/cartuchera.jpg";
import cartuchera2 from "../public/tarjetasDeCategorias/cartuchera2.jpg";
import cuaderno1 from "../public/tarjetasDeCategorias/cuaderno.jpg";
import cuaderno2 from "../public/tarjetasDeCategorias/cuaderno2.jpg";
import { Entidades } from "../types";


export const categorias: Entidades.Categoria[] = [
    {
        nombre: "Cartucheras",
        imagenes: [cartuchera1, cartuchera2],
        productos: [
            {
                _id: "Vas",
                nombre: "Cartuchera",
                imagenes: [], //Array de imagenes,
                descripcion: "Cartuchera tipo",
                precio: 200,
                stock: 2
            },
            {
                _id: "Vas23",
                nombre: "Cartuchera 2",
                imagenes: [], //Array de imagenes,
                descripcion: "Cartuchera tipo 2",
                precio: 300,
                stock: 4
            },
            {
                _id: "jnas",
                nombre: "Cartuchera 3",
                imagenes: [], //Array de imagenes,
                descripcion: "Cartuchera tipo 2",
                precio: 300,
                stock: 4
            }
        ] //Array de Object.Id producto
    },
    {
        nombre: "Cuadernos",
        imagenes: [cuaderno1, cuaderno2],
        productos: [
            {
                _id:"aksna",
                nombre: "Cuaderno 1",
                imagenes: [],
                descripcion: "Cuaderno tipo",
                precio: 300,
                stock: 5
            },
            {
                _id: "kjnk",
                nombre: "Cuaderno 2",
                imagenes: [],
                descripcion: "Cuaderno tipo 2",
                precio: 500,
                stock: 6
            }
        ]
    },
    {
        nombre: "Balitas masturbadoras",
        imagenes: [cuaderno1, cuaderno2],
        productos: [
            {
                _id: "knkans",
                nombre: "Bala hipermimosa",
                imagenes: [],
                descripcion: "Cuaderno tipo",
                precio: 300,
                stock: 5
            },
            {
                _id: "kjnk",
                nombre: "Tiro al aire",
                imagenes: [],
                descripcion: "Cuaderno tipo 2",
                precio: 500,
                stock: 6
            },
            {
                _id: "kjhkjh",
                nombre: "La tenes adentro",
                imagenes: [],
                descripcion: "Pronfundidad maxima",
                precio: 500,
                stock: 6
            }
        ]
    }
];