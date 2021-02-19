import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

function New({ addNew, colorList, edit }) {
  const params = useParams();

  const [isEdit, setIsEdit] = useState(params.id ? true : false);

  let editableItem = '';
  if (isEdit) {
    editableItem = colorList.filter((el) => el.id == params.id);
  }
  const [from, setFrom] = useState(editableItem ? editableItem[0].from : editableItem);
  const [to, setTo] = useState(editableItem ? editableItem[0].to : editableItem);
  const [matchFrom, setMatchFrom] = useState(isEdit ? true : false);
  console.log('🚀 ~ file: New.js ~ line 16 ~ New ~ matchFrom', matchFrom);
  const [matchTo, setMatchTo] = useState(isEdit ? true : false);
  console.log('🚀 ~ file: New.js ~ line 17 ~ New ~ matchTo', matchTo);

  const history = useHistory();

  const formHandler = (e) => {
    e.preventDefault();
    let newColor = { from, to };
    setFrom('');
    setTo('');
    addNew(newColor);
    history.replace('/');
  };
  const editHandler = (e) => {
    e.preventDefault();
    edit({ id: params.id, from, to });
    e.preventDefault();
    history.replace('/');
  };

  const inputHandler = (e) => {
    const regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g;

    if (e.target.name === 'from') {
      setFrom(e.target.value);
      if (e.target.value.match(regex)) {
        setMatchFrom(true);
      } else {
        setMatchFrom(false);
      }
    } else {
      setTo(e.target.value);
      if (e.target.value.match(regex)) {
        setMatchTo(true);
      } else {
        setMatchTo(false);
      }
    }
  };

  let disabled = matchFrom && matchTo;

  let form = (
    <form onSubmit={formHandler}>
      <input onChange={inputHandler} type='text' required name='from' value={from} />
      <input onChange={inputHandler} type='text' required name='to' value={to} />
      <button>Cancel</button>
      <button disabled={!disabled}>Submit</button>
    </form>
  );
  if (isEdit) {
    form = (
      <form onSubmit={editHandler}>
        <input onChange={inputHandler} type='text' required name='from' value={from} />
        <input onChange={inputHandler} type='text' required name='to' value={to} />
        <button>Cancel</button>
        <button disabled={!disabled}>Submit</button>
      </form>
    );
  }

  return <section className='new'>{form}</section>;
}

export default New;
