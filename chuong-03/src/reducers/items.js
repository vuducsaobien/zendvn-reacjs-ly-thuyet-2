import { createReducer } from '@reduxjs/toolkit';
import { DELETE_ITEM } from '../actions';
import { remove as removeDash} from 'lodash';
import * as Config from '../constants/Config';

// Các State của app.js
let defaultState = [];

const storedItems = localStorage.getItem(Config.ITEMS_FROM_LOCAL_STOGARE);
if (storedItems) {
    defaultState = JSON.parse(storedItems);
}

const items = createReducer(defaultState, (builder) => {
    builder
        .addCase(DELETE_ITEM, (state, action) => {
            const id = action.payload.id;

            // Lọc ra các item không khớp với id cần xóa
            let itemsRemove = state.filter((item) => item.id !== id);
    
            localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(itemsRemove));
            return itemsRemove; // câp nhật lại state items trong stogare
        })
});

export default items;