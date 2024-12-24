import { createSlice, configureStore } from '@reduxjs/toolkit';

// Set States App.js
let initialState = {
    items : [],
    isShowForm : true,
    strSearchApp : '',
    orderBy : 'name',
    orderDir : 'asc',
    itemSelected : null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers : {
        CLOSE_FORM: (state) => {
            state.isShowForm = false;
            return state;
        },
        OPEN_FORM: (state) => {
            state.isShowForm = true;
            return state;
        },
        TOOGLE_FORM: (state) => {
            state.isShowForm = !state.isShowForm;
            return state;
        }
    }
});

const store = configureStore({
    reducer: appSlice.reducer
});

// Export các actions để sử dụng
export const { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM } = appSlice.actions;

console.log('init', store.getState().isShowForm); // Init ; isShowForm = true

store.dispatch(CLOSE_FORM());
console.log('CLOSE FORM', store.getState().isShowForm); // isShowForm phai = false

store.dispatch(TOOGLE_FORM());
console.log('TOOGLE FORM', store.getState().isShowForm); // isShowForm phai = true

store.dispatch(OPEN_FORM());
console.log('OPEN FORM', store.getState().isShowForm); // isShowForm phai = true


export default store;