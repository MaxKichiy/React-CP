import Header from './components/Layout/Header';
import Main from './components/Layout/Main/Index.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from './components/Layout/New';
import { useEffect, useState } from 'react';

function App() {
  let localColors;
  if (localStorage.getItem('myColors')) {
    localColors = JSON.parse(localStorage.getItem('myColors'));
  } else {
    localColors = '';
  }

  const [mobMenu, setMobMenu] = useState(false);
  const [tuColors, setTuColors] = useState(localColors);

  const newColorHandler = (data) => {
    let newColor = { id: Math.random() * 100, from: data.from, to: data.to };
    let newList = [...tuColors, newColor];
    setTuColors(newList);
  };
  const deleteColorHandler = (id) => {
    let newList = tuColors.filter((el) => el.id !== id);
    setTuColors(newList);
  };
  const editHandler = (data) => {
    let newList = tuColors.map((element) => {
      if (element.id == data.id) {
        element.from = data.from;
        element.to = data.to;
      }
      return element;
    });
    setTuColors(newList);
  };

  const setLocalData = () => {
    localStorage.setItem('myColors', JSON.stringify(tuColors));
  };

  useEffect(() => {
    // setTuColors(localColors);
    // console.log(JSON.parse(tuColors));
    setLocalData();
  }, [tuColors]);

  return (
    <Router>
      <div className='App'>
        <Header isMenuVisible={mobMenu} setIsMenuVisible={setMobMenu} />

        <Route path='/' exact>
          <Main colorList={tuColors} deleteHandler={deleteColorHandler} />
        </Route>
        <Route path='/new'>
          <New addNew={newColorHandler} />
        </Route>
        <Route path='/edit/:id'>
          <New colorList={tuColors} edit={editHandler} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
