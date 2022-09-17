import React from 'react';
import lens from '../../images/lens.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onChange,
  onSubmit,
  searchText,
  toggleCheckbox,
  checkbox,
}) {
  return (
    <div className='search'>
      <div className='search__row'>
        <form className='search__form' onSubmit={onSubmit}>
          <input
            className='search__input'
            placeholder='Фильм'
            type='text'
            onChange={onChange}
            value={searchText}
            required
          ></input>
        </form>
        <button className='search__button' type='submit'>Найти</button>
      </div>
      <FilterCheckbox toggleCheckbox={toggleCheckbox} checkbox={checkbox} />
    </div>
  );
}

export default SearchForm;
