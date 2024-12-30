import { createReducer } from '@reduxjs/toolkit';
import { SORT_FORM } from '../actions';

// Các State của app.js
const defaultState = {orderBy: 'level', orderDir: 'asc'};

const sort = createReducer(defaultState, (builder) => {
    builder
        .addCase(SORT_FORM, (state, action) => {
            state.orderBy = action.payload.orderBy;
            state.orderDir = action.payload.orderDir;
        });
});

export default sort;