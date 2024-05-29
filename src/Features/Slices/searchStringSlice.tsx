import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State{
    search: string;
};
const initialState: State = {
    search: "",
};

const searchStringSlice = createSlice({
    name: "searchStrSlice",
    initialState,
    reducers: {
        changeSearchStr: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }
    }
});

export const {changeSearchStr} = searchStringSlice.actions;
export default searchStringSlice.reducer;