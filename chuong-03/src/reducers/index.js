import { combineReducers } from '@reduxjs/toolkit';
// import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } from '../actions';
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';

const appReducer = combineReducers({
    isShowForm,
    sort,
    items
});

export default appReducer;