import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

const itemsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return (state = [...payload]);
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      return (state = [...state, payload]);
    },

    [deleteContacts.fulfilled](state, action) {
      //console.log(action);
      return state.filter(({ id }) => {
        //console.log(id);
        return id !== action.meta.arg;
      });
    },
  },
});

export const { addItems, deleteItems } = itemsReducer.actions;

export const reducer = itemsReducer.reducer;


