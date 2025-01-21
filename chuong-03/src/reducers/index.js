import { combineReducers } from '@reduxjs/toolkit';
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';
import search from './search';
import itemSelected from './itemSelected';

const appReducer = combineReducers({
    isShowForm,
    sort,
    items,
    search,
    itemSelected
});

export default appReducer;