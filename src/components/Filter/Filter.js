import React from 'react';
import s from './Filter.module.css';
import { contactsSelectors } from 'Redux/Contacts';

import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'Redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  return (
    <label className={s.filter_label}>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        value={value}
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
