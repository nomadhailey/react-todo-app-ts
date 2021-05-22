import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
