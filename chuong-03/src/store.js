import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers';
// import { OPEN_FORM, CLOSE_FORM, SORT_FORM, TOOGLE_FORM } from './actions'; // Import actions đã định nghĩa

const store = configureStore({
    reducer: appReducer,
    devTools: process.env.NODE_ENV !== 'production', // Chỉ bật DevTools khi không phải production
});

// console.log('init - orderBy', store.getState()); // Init ; orderBy = name & orderDir = desc

store.subscribe(() => {
    // console.log('subscribe');
});

// store.dispatch(TOOGLE_FORM()); // Goi store.subscribe
// store.dispatch(SORT_FORM({orderBy: 'level', orderDir: 'asc'})); // Goi store.subscribe
// console.log('SORT_FORM orderBy', store.getState()); // orderBy phai = level  ; orderDir phai = asc

export default store;