import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';

import AddTech from './components/AddTech';
import ListTechs from './components/ListTechs';
import QtdTechs from './components/QtdTechs';

function App() {

  return (
    <Provider store={store}>
      <QtdTechs/>
      <ListTechs/>
      <AddTech/>
    </Provider>
  );
}

export default App;
