import { combineReducers } from '@reduxjs/toolkit';
// import { CLOSE_FORM, OPEN_FORM, TOOGLE_FORM, SORT_FORM } from '../actions';
import isShowForm from './isShowForm';
import sort from './sort';

const appReducer = combineReducers({
    isShowForm,
    sort
});

export default appReducer;