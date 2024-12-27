import { createReducer } from '@reduxjs/toolkit';
import * as types from '../constants/ActionTypes';

const defaultState = '';

const search = createReducer(defaultState, (builder) => {
    builder
        // .addCase(types.CHANGE_SEARCH, (state, action) => state)

        .addCase(types.CHANGE_SEARCH, (state, action) => {
            // console.log('action ---- ', action);
            return action.search; // Cập nhật state từ payload của action
        })
        ;
});

export default search;