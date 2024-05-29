import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State{
    courses: string[];
   
}
const initialState: State = {
    courses: [
        "Promyshlennaya bezopasnost",
        "Energeticheskaya bezopasnost",
        "Nepodnadzornoe oborudovanie",
        "Gazovaya inspekciya",
        "Kotlnad",
        "Gruzopodemnye mekhanizmy",
        "Obuchenie svarshchikov, gazorezchikov",
        "Obuchenie plavilshchikov, litejshchikov",
        "Obuchenie clesarej",
        "Pravila tekhnicheskoj ekspluatacii elektroustanovok potrebitelej",
        "Pravila tekhnicheskoj ekspluataciya teplovyh energoustanovok, teplopotreblyayushchih ustanovok i teplovyh setej potrebitelej",
        "Ohrana truda (rukovoditeli i rabotniki)",
        "Upravlenie gosudarstvennoj protivopozharnoj sluzhby",
        "AZS",
    ]
};

const coursesSlice = createSlice({
    name: "coursesSlice",
    initialState,
    reducers: {
        changeCourses: (state, action: PayloadAction<string>) => {
            state.courses = state.courses;
        }
            
    }
});

export const {changeCourses} = coursesSlice.actions;
export default coursesSlice.reducer;
