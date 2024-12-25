import { createReducer } from '@reduxjs/toolkit';
import { SORT_FORM } from '../actions';

// Các State của app.js
const defaultState = {orderBy: 'name', orderDir: 'desc'};

const sortReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(SORT_FORM, (state, action) => {
            state.orderBy = action.payload.orderBy;
            state.orderDir = action.payload.orderDir;
        });
});

export default sortReducer;