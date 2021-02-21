import React from 'react';

function MyInput({ name, value, inputHandler }) {
  return (
    <label>
      {name}
      <input
        className='new__input'
        onChange={inputHandler}
        type='text'
        required
        name={name}
        value={value}
      />
    </label>
  );
}

export default MyInput;
