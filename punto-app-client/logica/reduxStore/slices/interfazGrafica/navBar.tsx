import { createSlice } from "@reduxjs/toolkit";
import { States } from "../../../../types";
import { RootState } from "../../index";
const initialNavBarState: States.InterfazGrafica.navBar = {
    "bg-white": false,
    "bg-dark": false,
    "navbar-dark": true,
    "navbar-translucida": true,
    "visibility": true,
    estaEnZonaOscura: false,
    estaExpandida: false
};
export const navBarSlice = createSlice({
    name: "navBar",
    initialState: initialNavBarState,
    reducers: {
        hacerVisible: (prevState) => {
            prevState.visibility = true
        },
        hacerInvisible: (prevState) => {
            prevState.visibility = false
        },
        aplicarEstiloDeExpandida: (prevState) => {
            prevState.estaExpandida = true;
            if (!prevState.estaEnZonaOscura) {
                prevState["bg-white"] = true;
                prevState["bg-dark"] = false;
                prevState["navbar-dark"] = false;
                prevState["navbar-translucida"]= false;
            } else {
                prevState["bg-white"] = false;
                prevState["bg-dark"] = true;
                prevState["navbar-dark"] = true;
                prevState["navbar-translucida"]= false;
            }
        },
        aplicarEstiloDeNoExpandida: (prevState) => {
            prevState.estaExpandida = false;
            if (!prevState.estaEnZonaOscura) {
                prevState["bg-white"] = false;
                prevState["bg-dark"] = false;
                prevState["navbar-dark"] = true;
                prevState["navbar-translucida"]= true;
            } else {
                prevState["bg-white"] = false;
                prevState["bg-dark"] = true;
                prevState["navbar-dark"] = true;
                prevState["navbar-translucida"]= false;
            }
        },
        indicarQueEstaEnZonaOscura: (prevState) => {
            prevState.estaEnZonaOscura = true;
            if (prevState.estaExpandida) {
                prevState["bg-white"] = false;
                prevState["bg-dark"] = true;
                prevState["navbar-dark"] = true;
                prevState["navbar-translucida"]= false;
            } else {
                prevState["bg-white"] = false;
                prevState["bg-dark"] = true;
                prevState["navbar-dark"] = true;
                prevState["navbar-translucida"]= false;
            }
        },
        indicarQueEstaEnZonaClara: (prevState) => {
            prevState.estaEnZonaOscura = false;
            if (prevState.estaExpandida) {
                prevState["bg-white"] = true;
                prevState["bg-dark"] = false;
                prevState["navbar-dark"] = false;
                prevState["navbar-translucida"]= false;
            } else {
                prevState["bg-white"] = false;
                prevState["bg-dark"] = false;
                prevState["navbar-dark"] = true;
                prevState["navbar-translucida"]= true;
            }

        }
    }
});
//Action creators
export const navBarActions = navBarSlice.actions
//Reducer
const navBarReducer = navBarSlice.reducer;

export default navBarReducer