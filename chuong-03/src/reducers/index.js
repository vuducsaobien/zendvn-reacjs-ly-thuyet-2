import { combineReducers } from '@reduxjs/toolkit';
// import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } from '../actions';
import isShowFormReducer from './isShowFormReducer';
import sortReducer from './sortReducer';


// Các State của app.js
// const initialState = {
//     items: [],
//     isShowForm: true,
//     strSearchApp: '',
//     orderBy: 'name',
//     orderDir: 'asc',
//     itemSelected: null,
// };

// const appReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(CLOSE_FORM, (state) => {
//             state.isShowForm = false;
//         })
//         .addCase(OPEN_FORM, (state) => {
//             state.isShowForm = true;
//         })
//         .addCase(TOOGLE_FORM, (state) => {
//             state.isShowForm = !state.isShowForm;
//         })
//         .addCase(SORT_FORM, (state, action) => {
//             state.orderBy = action.payload.orderBy;
//             state.orderDir = action.payload.orderDir;
//         });
// });

const appReducer = combineReducers({
    isShowForm : isShowFormReducer,
    sort : sortReducer
});


export default appReducer;