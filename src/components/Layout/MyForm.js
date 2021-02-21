import React from 'react';
import MyInput from './Input';

function MyForm({ onClick, from, to, formHandler, inputHandler, disabled }) {
  return (
    <form className='new__form' onSubmit={formHandler}>
      <MyInput name='from' value={from} inputHandler={inputHandler} />
      <MyInput name='to' value={to} inputHandler={inputHandler} />

      <div className='new__button-wrapper'>
        <button type='button' className='new__button button button-secondary' onClick={onClick}>
          Cancel
        </button>
        <button className='new__button button button-main' disabled={!disabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default MyForm;
