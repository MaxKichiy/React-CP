import { Link } from 'react-router-dom';

function Item({ from, to, deleteHandler, id, onClickItem }) {
  return (
    <li onClick={onClickItem} className='main__item'>
      <div
        style={{ background: `linear-gradient(to right, ${from},${to})` }}
        className='main__item-color'></div>
      <div className='main__item-name'>
        <p>
          {from} {to}
        </p>
      </div>
      <div className='main__item-panel'>
        <span onClick={deleteHandler} className='main__item-del'>
          &times;
        </span>
        <Link onClick={(e) => e.stopPropagation()} to={`/edit/${id}`} className='main__item-del'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
          </svg>
        </Link>
      </div>
    </li>
  );
}

export default Item;
