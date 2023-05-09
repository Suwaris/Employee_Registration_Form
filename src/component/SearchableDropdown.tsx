import React, { useState } from 'react';

interface SearchableDropdownProps {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({ name,options, value, onChange }) => {
  const [searchValue, setSearchValue] = useState('');
  // const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
     setSearchValue('');
    // setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
  option.toLowerCase().includes(searchValue.toLowerCase())
);

  return (
    <div className="searchable-dropdown">
    <input type="text" id="list" value={searchValue} onChange={handleInputChange} placeholder="Search departments"/>
    {filteredOptions.length > 0 && (
  <ul id="list"> {filteredOptions.map((option) => (
    <li key={option} onClick={() => handleOptionClick(option)}> {option} </li>
  ))}
  </ul>
)}
  </div>
  );
};

export default SearchableDropdown;
