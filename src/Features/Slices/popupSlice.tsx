import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addCource, removeCource } from "./favoriitesSlice";

interface PopUp {
    popup: boolean;
    text: string;
};

const initialState: PopUp = {
    popup: false,
    text: "",
}

const popupSlice = createSlice({
    name: "popupSlice",
    initialState,
    reducers: {
        popupChange: (state, action: PayloadAction<boolean>) => {
            state.popup = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addCource, (state) => {
            state.popup = true;
            state.text = "Курс добавлен";
        });
        builder.addCase(removeCource, state => {
            state.popup = true;
            state.text = "Курс удален";
        })
    }
});

export const {popupChange} = popupSlice.actions;
export default popupSlice.reducer;