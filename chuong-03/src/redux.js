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
        },
        SORT_FORM: (state, action) => {
            state.orderBy = action.payload.orderBy;
            state.orderDir = action.payload.orderDir;
            return state;
        }
    }
});

const store = configureStore({
    reducer: appSlice.reducer
});

// Export các actions để sử dụng
export const { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } = appSlice.actions;

console.log('init - orderBy', store.getState().orderBy); // Init ; orderBy = name
console.log('init - orderDir', store.getState().orderDir); // Init ; orderDir = asc

store.dispatch(SORT_FORM({orderBy: 'level', orderDir: 'desc'}));

console.log('SORT_FORM orderBy', store.getState().orderBy); // orderBy phai = level
console.log('SORT_FORM orderDir', store.getState().orderDir); // orderDir phai = desc


export default store;