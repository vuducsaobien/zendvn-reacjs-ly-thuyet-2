import { combineReducers } from '@reduxjs/toolkit';
// import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } from '../actions';
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';
import search from './search';

const appReducer = combineReducers({
    isShowForm,
    sort,
    items,
    search
});

export default appReducer;