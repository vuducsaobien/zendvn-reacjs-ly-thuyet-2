// import { createReducer } from '@reduxjs/toolkit';
// import { ADD_ITEM, DELETE_ITEM } from '../actions';
import * as Config from '../constants/Config';
import { v4 as uuidv4 } from 'uuid';
import * as types from './../constants/ActionTypes';

// Các State của app.js
let defaultState = [];

const storedItems = localStorage.getItem(Config.ITEMS_FROM_LOCAL_STOGARE);
if (storedItems) {
    defaultState = JSON.parse(storedItems);
}

// const items = createReducer(defaultState, (builder) => {
//     builder
//         .addCase(DELETE_ITEM, (state, action) => {
//             const id = action.payload.id;

//             // Lọc ra các item không khớp với id cần xóa
//             let itemsRemove = state.filter((item) => item.id !== id);
    
//             localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(itemsRemove));
//             return itemsRemove; // câp nhật lại state items trong stogare
//         })
//         .addCase(ADD_ITEM, (state, action) => {

//             // let newItems = [...items, {
//             let item = action.payload;

//             // console.log('item', item);
//             let items = [...state, {
//                 id: uuidv4(),
//                 name: item.name,
//                 level: +item.level
//             }];

//             localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(items));
//             return items;
//         })

// });

const items = (state = defaultState, action) => {
	switch(action.type){

		case types.DELETE_ITEM:
            const id = action.payload.id;
            // Lọc ra các item không khớp với id cần xóa
            let itemsRemove = state.filter((item) => item.id !== id);
            localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(itemsRemove));
            
        return itemsRemove; // câp nhật lại state items trong stogare
        // return [...state];

        case types.ADD_ITEM:
            // let newItems = [...items, {
            let item = action.payload;
            let items = [...state, {
                id: uuidv4(),
                name: item.name,
                level: +item.level
            }];

            localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(items));
            return items;
        // return [...state];    

        default:
        return state;
    }
}

export default items;