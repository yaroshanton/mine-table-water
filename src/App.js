import React from 'react';
import dataDB from './test.data.json';
import TableInfo from './components/TableInfo/TableInfo';
import './styles.scss';

function App() {
  return (
    <div className="container">
      <TableInfo data={dataDB} />
    </div>
  );
}

export default App;
