import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #d8d8d8;
  margin-bottom: 10px;
  padding: 10px;
`;
const CheckBoxContainer = styled.div``;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TodoItem = () => {
  return (
    <Container>
      <FlexContainer>
        <CheckBoxContainer>
          <input type="checkbox" />
          <span>1</span>
        </CheckBoxContainer>
        <button>&times;</button>
      </FlexContainer>
      <div>todo</div>
      <span>시간</span>
    </Container>
  );
};

export default TodoItem;
