import { createReducer } from '@reduxjs/toolkit';
import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM } from '../actions';

// State isShowForm của app.js
const defaultState = false;

const isShowFormReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(CLOSE_FORM, (state) => {
            state.isShowForm = false;
        })
        .addCase(OPEN_FORM, (state) => {
            state.isShowForm = true;
        })
        .addCase(TOOGLE_FORM, (state) => {
            state.isShowForm = !state.isShowForm;
        });
});

export default isShowFormReducer;