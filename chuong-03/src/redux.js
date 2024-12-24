import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers';
import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } from './actions'; // Import actions đã định nghĩa

const redux = configureStore({
    reducer: appReducer
});

console.log('init - orderBy', redux.getState().orderBy); // Init ; orderBy = name
console.log('init - orderDir', redux.getState().orderDir); // Init ; orderDir = asc

redux.dispatch(SORT_FORM({orderBy: 'level', orderDir: 'desc'}));

console.log('SORT_FORM orderBy', redux.getState().orderBy); // orderBy phai = level
console.log('SORT_FORM orderDir', redux.getState().orderDir); // orderBy phai = level

export default redux;