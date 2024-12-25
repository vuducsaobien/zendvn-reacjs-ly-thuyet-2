import { createReducer } from '@reduxjs/toolkit';
import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM } from '../actions';

// State isShowForm của app.js
const defaultState = true;

const isShowFormReducer = createReducer(defaultState, (builder) => {
    builder
        // .addCase(CLOSE_FORM, (state) => {
        //     state.isShowForm = false;
        // })
        // .addCase(OPEN_FORM, (state) => {
        //     state.isShowForm = true;
        // })
        // .addCase(TOOGLE_FORM, (state) => {
        //     state.isShowForm = !state.isShowForm;
        // });
        .addCase(CLOSE_FORM, () => false) // Trả về giá trị boolean
        .addCase(OPEN_FORM, () => true)  // Trả về giá trị boolean
        .addCase(TOOGLE_FORM, (state) => !state); // Đảo ngược giá trị boolean
});

export default isShowFormReducer;