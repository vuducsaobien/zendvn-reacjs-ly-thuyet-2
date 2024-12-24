import { createSlice, configureStore } from '@reduxjs/toolkit';

// Set States App.js
let initialState = {
    items : [],
    isShowForm : false,
    strSearchApp : '',
    orderBy : 'name',
    orderDir : 'asc',
    itemSelected : null,
};

/* 
let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE_FORM':
            console.log('CLOSE_FORM', state);
            break;
    
        default:
            return state;
    }
    // return state;
};
*/

/* 
    let appReducer = {
        
    };  
*/


const appSlice = createSlice({
    name: 'app',
    initialState,

    reducers : {
        CLOSE_FORM: (state) => {
            console.log('CLOSE_FORM');
            console.log(state);
            return state;
        }
    }
});

const store = configureStore({
    reducer: appSlice.reducer
});

console.log(store);
// console.log(store.getState());

// Export các actions để sử dụng
export const { CLOSE_FORM } = appSlice.actions;

store.dispatch(CLOSE_FORM());


export default store;

// khi các initialState thay đổi  
// => gọi action truyền vào state 
// => thông qua appReducer trả về state mới
