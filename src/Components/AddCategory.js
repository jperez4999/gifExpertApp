import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(prevState => [inputValue, ...prevState]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
