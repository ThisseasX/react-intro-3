import React, { useState, useEffect } from 'react';
import Todo from 'components/Todo';
import classes from './todos.module.css';

const Todos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={classes.todoGrid}>
      {data.map((todo) => (
        <Todo key={todo.id} data={todo} />
      ))}
    </div>
  );
};

export default Todos;
