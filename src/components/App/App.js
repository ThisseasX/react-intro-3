import React from 'react';
import Todos from 'components/Todos';
import classes from './app.module.css';

const App = () => (
  <div className={classes.app}>
    <h1 className={classes.header}>My Todo List</h1>
    <Todos />
  </div>
);

export default App;
