import React from 'react';
import { FilterOption } from '../pages/Main';

interface FilterProps {
  options: FilterOption[];
  selectedOption: FilterOption;
  onChange: (selectedOption: FilterOption) => void;
}

const Filter = ({options, selectedOption, onChange}: FilterProps) => {
  return (
    <label>Choose Filter:
      <select
        name="filter"
        onChange={(evt) => {
          onChange(evt.target.value as FilterOption);
        }}
      >
        {options.map((option: FilterOption) => (
          option === selectedOption
            ? <option key={option} value={option} selected>{option}</option>
            : <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Filter;
