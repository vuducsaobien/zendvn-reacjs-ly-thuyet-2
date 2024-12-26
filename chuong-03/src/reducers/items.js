import { createReducer } from '@reduxjs/toolkit';
// import { SORT_FORM } from '../actions';

// Các State của app.js
let defaultState = [];

const storedItems = localStorage.getItem('tasks');
if (storedItems) {
    defaultState = JSON.parse(storedItems);
}

const items = createReducer(defaultState, (builder) => {
    // builder
        // .addCase(SORT_FORM, (state, action) => {
        //     state.orderBy = action.payload.orderBy;
        //     state.orderDir = action.payload.orderDir;
        // });
});

export default items;