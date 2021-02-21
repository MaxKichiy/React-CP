import { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../PopUp';
import Item from './Item';

function Main({ colorList, deleteHandler }) {
  const [isPopupShowing, setIsPopupShowing] = useState(false);

  let newPop = () => {
    setIsPopupShowing(true);
    setTimeout(() => {
      setIsPopupShowing(false);
    }, 2000);
  };

  let myColors =
    colorList &&
    colorList.map((el) => (
      <Item
        deleteHandler={(e) => {
          e.stopPropagation();
          deleteHandler(el.id);
        }}
        key={el.id}
        from={el.from}
        to={el.to}
        id={el.id}
        onClickItem={() => {
          newPop();
          navigator.clipboard.writeText(`linear-gradient(to right, ${el.from},${el.to})`);
        }}
      />
    ));

  return (
    <section className='main'>
      {isPopupShowing && <PopUp />}
      <div className='main__wrapper'>
        {myColors.length >= 1 ? (
          <ul className='main__list'>{myColors}</ul>
        ) : (
          <h2 style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link className='main__title' to='/new'>
              Добавьте
            </Link>
            &nbsp; свой любимый градиент
          </h2>
        )}
      </div>
    </section>
  );
}

export default Main;
