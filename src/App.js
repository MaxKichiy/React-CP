import Header from './components/Layout/Header';
import Main from './components/Layout/Main/Index.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import New from './components/Layout/New';
import { useEffect, useState } from 'react';

function App() {
  const [mobMenu, setMobMenu] = useState(false);
  const [colorsList, setColorsList] = useState([]);

  useEffect(() => {
    let localColors = JSON.parse(localStorage.getItem('myColors') || '[]');
    setColorsList(localColors);
  }, []);

  useEffect(() => {
    localStorage.setItem('myColors', JSON.stringify(colorsList));
  }, [colorsList]);

  const newColorHandler = (data) => {
    let newColor = { id: Math.random() * 100, from: data.from, to: data.to };
    setColorsList([...colorsList, newColor]);
  };
  const deleteColorHandler = (id) => {
    let newList = colorsList.filter((el) => el.id !== id);
    setColorsList(newList);
  };

  const editHandler = (data) => {
    let newList = colorsList.map((element) => {
      if (element.id == data.id) {
        element.from = data.from;
        element.to = data.to;
      }
      return element;
    });
    setColorsList(newList);
  };

  return (
    <Router>
      <div className='App'>
        <Header isMenuVisible={mobMenu} setIsMenuVisible={setMobMenu} />

        <Route path='/' exact>
          <Main colorList={colorsList} deleteHandler={deleteColorHandler} />
        </Route>
        <Route path='/new'>
          <New addNew={newColorHandler} />
        </Route>
        <Route path='/edit/:id'>
          <New colorList={colorsList} edit={editHandler} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
