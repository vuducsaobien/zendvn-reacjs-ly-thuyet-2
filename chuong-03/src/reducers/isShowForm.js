import { createReducer } from '@reduxjs/toolkit';
// import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM } from '../actions';
import * as types from '../constants/ActionTypes';

// State isShowForm của app.js
const defaultState = true;

const isShowForm = createReducer(defaultState, (builder) => {
    builder
        .addCase(types.CLOSE_FORM, () => false) // Trả về giá trị boolean
        .addCase(types.OPEN_FORM, () => true)  // Trả về giá trị boolean
        .addCase(types.TOOGLE_FORM, (state) => !state); // Đảo ngược giá trị boolean
});

export default isShowForm;