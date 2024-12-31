import { createReducer } from '@reduxjs/toolkit';
import { ADD_ITEM, DELETE_ITEM } from '../actions';
import * as Config from '../constants/Config';
import { v4 as uuidv4 } from 'uuid';

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
        .addCase(ADD_ITEM, (state, action) => {

            // let newItems = [...items, {
            let item = action.payload;

            // console.log('item', item);
            let items = [...state, {
                id: uuidv4(),
                name: item.name,
                level: +item.level
            }];

            localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(items));
            return items;
        })

});

export default items;