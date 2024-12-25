import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers';
import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } from './actions'; // Import actions đã định nghĩa

const redux = configureStore({
    reducer: appReducer
});

console.log('init - orderBy', redux.getState()); // Init ; orderBy = name & orderDir = desc

redux.dispatch(SORT_FORM({orderBy: 'level', orderDir: 'asc'}));

console.log('SORT_FORM orderBy', redux.getState()); // orderBy phai = level  ; orderDir phai = asc

export default redux;