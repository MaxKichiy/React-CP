import { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../PopUp';
import Item from './Item';

function Main({ colorList, deleteHandler }) {
  const [isShowing, setIsShowing] = useState(false);

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
          navigator.clipboard.writeText(`linear-gradient(to right, ${el.from},${el.to})`);
          newPop();
        }}
      />
    ));

  let newPop = () => {
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 2000);
  };
  return (
    <section className='main'>
      {isShowing && <PopUp />}
      <div className='main__wrapper'>
        <ul className='main__list'>
          {myColors.length >= 1 ? (
            myColors
          ) : (
            <h2 style={{ textAlign: 'center', marginTop: '5rem' }}>
              <Link className='main__title' to='/new'>
                Добавьте
              </Link>
              &nbsp; свой любимый градиент
            </h2>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Main;
