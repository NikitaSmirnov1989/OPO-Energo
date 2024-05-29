import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { popupChange } from "./popupSlice";
import { RootState } from "../store";

interface State{
    favorites: any[];
}
const initialState: State = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favoritesSlice",
    initialState,
    reducers: {
        addCource: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            state.favorites = state.favorites.includes(id) ? state.favorites : [...state.favorites, action.payload.id];
        },
        removeCource: (state, action: PayloadAction<{id: number}>) => {
            const {id} = action.payload;
            state.favorites = state.favorites.filter((item, index) => {
                return item !== id;
            })
        }
    },
});

export const {addCource, removeCource} = favoritesSlice.actions;
export default favoritesSlice.reducer;
