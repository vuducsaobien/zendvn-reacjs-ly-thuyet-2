// import { createAction } from '@reduxjs/toolkit';
import * as types from '../constants/ActionTypes';

// export const OPEN_FORM = createAction('app/' + types.OPEN_FORM);
// export const TOOGLE_FORM = createAction('app/' + types.TOOGLE_FORM);
// export const SORT_FORM = createAction('app/' + types.SORT_FORM);
// export const CHANGE_SEARCH = createAction('app/' + types.CHANGE_SEARCH);
// export const DELETE_ITEM = createAction('app/' + types.DELETE_ITEM);
// export const ADD_ITEM = createAction('app/' + types.ADD_ITEM);
// export const SET_ITEM_SELECTED = createAction('app/' + types.SET_ITEM_SELECTED);

export const actCloseForm = () => {
	return {
		type : types.CLOSE_FORM
	}
}

export const actOpenForm = () => {
	return {
		type : types.OPEN_FORM
	}
}