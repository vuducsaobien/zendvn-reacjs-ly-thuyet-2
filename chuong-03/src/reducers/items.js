import { createReducer } from '@reduxjs/toolkit';
// import { SORT_FORM } from '../actions';

// Các State của app.js
let defaultState = [
    {id: 'A1', name: 'Coding 1', level: 0},
    {id: 'A2', name: 'Coding 11', level: 0},
    {id: 'A3', name: 'Coding 2', level: 0},
    {id: 'A4', name: 'Football', level: 0},
];

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