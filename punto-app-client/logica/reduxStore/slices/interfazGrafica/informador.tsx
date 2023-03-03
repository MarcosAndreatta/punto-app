import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payloads, States } from "../../../../types";

const initialInformadorState: States.InterfazGrafica.Informador = {
    esVisible: false,
    mensaje: "",
    variante: "success"
};
export const informadorSlice = createSlice({
    name: "informador",
    initialState: initialInformadorState,
    reducers: {
        toggleVisibility: (prevState, payload: PayloadAction<Payloads.InterfazGrafica.Informador>) => {
            prevState.esVisible = payload.payload.visibilidad
        },
        informar: (prevState, payload: PayloadAction<Payloads.InterfazGrafica.Informador>) => {
            prevState.esVisible = true;
            prevState.variante = "info";
            prevState.mensaje = payload.payload.mensaje
        },
        informarError: (prevState, payload: PayloadAction<Payloads.InterfazGrafica.Informador>) => {
            prevState.esVisible = true;
            prevState.variante = "danger";
            prevState.mensaje = payload.payload.mensaje
        },
        informarFueExitoso: (prevState, payload: PayloadAction<Payloads.InterfazGrafica.Informador>) => {
            prevState.esVisible = true;
            prevState.variante = "success";
            prevState.mensaje = payload.payload.mensaje
        },
    }
});
export const informadorActions = informadorSlice.actions;
const informadorReducer = informadorSlice.reducer;
export default informadorReducer