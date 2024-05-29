import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Slices/favoriitesSlice";
import searchReducer from "./Slices/searchStringSlice";
import coursesReducer from "./Slices/coursesSlices";
import popupReducer from "./Slices/popupSlice";


const store = configureStore({
    reducer: {
        favoritesCourses: favoritesReducer,
        searchString: searchReducer, 
        coursesReducer: coursesReducer,
        popupReducer: popupReducer,
    }
});
console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})
export type RootState = ReturnType<typeof store.getState>;
export default store;