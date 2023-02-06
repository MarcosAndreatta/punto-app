import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payloads, States } from "../../../../types";
const initialBackdropState: States.InterfazGrafica.backDrop = {
    visible: false
};
export const backDropSlice = createSlice({
    name: "backDrop",
    initialState: initialBackdropState,
    reducers: {
        toggleVisibility: (prevState, payload: PayloadAction<Payloads.InterfazGrafica.backDrop>) => {
            prevState.visible = payload.payload
        }
    }
});
export const backDropActions = backDropSlice.actions;
const backDropReducer = backDropSlice.reducer;
export default backDropReducer