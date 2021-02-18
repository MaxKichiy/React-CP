import { Link } from 'react-router-dom';

function Item({ from, to, deleteHandler, id }) {
  return (
    <li className='main__item'>
      <div
        style={{ background: `linear-gradient(to right, ${from},${to})` }}
        className='main__item-color'></div>
      <div className='main__item-name'>
        {from} {to}
      </div>
      <span onClick={deleteHandler} className='main__item-del'>
        &times;
      </span>
      <Link to={`/edit/${id}`} className='main__item-del'>
        &hearts;
      </Link>
    </li>
  );
}

export default Item;
