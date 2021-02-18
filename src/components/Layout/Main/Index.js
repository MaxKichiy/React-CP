import Item from './Item';

function Main({ colorList, deleteHandler }) {
  let myColors =
    colorList &&
    colorList.map((el) => (
      <Item
        deleteHandler={() => deleteHandler(el.id)}
        key={el.id}
        from={el.from}
        to={el.to}
        id={el.id}
      />
    ));
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <ul className='main__list'>{myColors}</ul>
      </div>
    </section>
  );
}

export default Main;
