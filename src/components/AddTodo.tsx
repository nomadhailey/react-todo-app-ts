import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  margin: 0 auto;
  width: 70vw;
`;
const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const onChangeTodo = () => {};

  return (
    <div className="container">
      <form>
        <input name="todo" value={todo} onChange={onChangeTodo} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
