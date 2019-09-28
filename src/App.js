import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';

import AddTech from './components/AddTech';
import ListTechs from './components/ListTechs';
import QtyTechs from './components/QtyTechs';

function App() {

  return (
    <Provider store={store}>
      <QtyTechs/>
      <ListTechs/>
      <AddTech/>
    </Provider>
  );
}

export default App;
