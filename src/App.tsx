import React from 'react';

import './App.css';

import McBaseLayout from './layouts/McBaseLayout';
import McTable from './components/McTable';
import McMap from './components/McMap';

function App() {
  return (
    <McBaseLayout>
      <McTable />
      <McMap />
    </McBaseLayout>
  );
}

export default App;
