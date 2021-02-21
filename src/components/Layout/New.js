import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import MyInput from './Input';
import MyForm from './MyForm';
import myForm from './MyForm';

function New({ addNew, colorList, edit }) {
  const params = useParams();
  const history = useHistory();

  const [isEdit, setIsEdit] = useState(params.id ? true : false);

  let editableItem = '';
  if (isEdit) {
    editableItem = colorList.filter((el) => el.id == params.id);
  }
  const [from, setFrom] = useState(editableItem ? editableItem[0].from : editableItem);
  const [to, setTo] = useState(editableItem ? editableItem[0].to : editableItem);

  const [matchFrom, setMatchFrom] = useState(isEdit ? true : false);
  const [matchTo, setMatchTo] = useState(isEdit ? true : false);

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

  let isDisabled = matchFrom && matchTo;

  let form = (
    <MyForm
      onClick={() => history.push('/')}
      from={from}
      to={to}
      formHandler={formHandler}
      inputHandler={inputHandler}
      disabled={isDisabled}
    />
  );
  if (isEdit) {
    form = (
      <MyForm
        onClick={() => history.push('/')}
        from={from}
        to={to}
        formHandler={editHandler}
        inputHandler={inputHandler}
        disabled={isDisabled}
      />
    );
  }

  return <section className='new'>{form}</section>;
}

export default New;
