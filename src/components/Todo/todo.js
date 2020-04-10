import React, { useState } from 'react';
import classes from './todo.module.css';
import clsx from 'clsx';

const Todo = ({ data: { userId, id, title, completed }, className }) => {
  const [done, setDone] = useState(completed);

  const handleClick = () => {
    setDone((done) => !done);
  };

  return (
    <div
      className={clsx(
        classes.todo,
        done ? classes.done : classes.notDone,
        className,
      )}
      onClick={handleClick}
    >
      <div className={classes.idContainer}>
        <div>USER:&nbsp;{userId}</div>
        <div>ID:&nbsp;{id}</div>
      </div>
      <div className={classes.title}>{title}</div>
    </div>
  );
};

export default Todo;
