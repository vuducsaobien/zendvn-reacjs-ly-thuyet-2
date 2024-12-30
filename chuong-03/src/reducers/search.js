import { createReducer } from '@reduxjs/toolkit';
import { CHANGE_SEARCH } from '../actions';

const defaultState = '';

const search = createReducer(defaultState, (builder) => {
    builder
        .addCase(CHANGE_SEARCH, (state, action) => {
            return action.payload; // Cập nhật state từ payload của action
        })
    ;
});

export default search;