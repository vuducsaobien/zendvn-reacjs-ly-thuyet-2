import { createReducer } from '@reduxjs/toolkit';
import { SET_ITEM_SELECTED } from '../actions';

// Các State của app.js
let defaultState = { id: '', name:'', level:0 };

const itemSelected = createReducer(defaultState, (builder) => {
    builder
        .addCase(SET_ITEM_SELECTED, (state, action) => {
            return action.payload;
        })
});

export default itemSelected;