import { createReducer } from '@reduxjs/toolkit';
// import { SORT_FORM } from '../actions';

// Các State của app.js
const defaultState = [
    {id: 'A1', name: 'Coding Store', level: 0},
    {id: 'A2', name: 'Footbal  Store', level: 1},
    {id: 'A3', name: 'Watch TV  Store', level: 2}
];

const items = createReducer(defaultState, (builder) => {
    // builder
        // .addCase(SORT_FORM, (state, action) => {
        //     state.orderBy = action.payload.orderBy;
        //     state.orderDir = action.payload.orderDir;
        // });
});

export default items;