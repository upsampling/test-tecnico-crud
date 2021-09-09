import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Principal } from './components/Principal';
import { Provider } from 'react-redux';
import {store} from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <Principal />
    </Provider>
  )
}

export default App


