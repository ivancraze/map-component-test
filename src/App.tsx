import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import { store } from './store';
import McBaseLayout from './layouts/McBaseLayout';
import McTable from './components/McTable';
import McMap from './components/McMap';

function App() {
  return (
    <Provider store={store}>
      <McBaseLayout>
        <McTable />
        <McMap />
      </McBaseLayout>
    </Provider>
  );
}

export default App;
