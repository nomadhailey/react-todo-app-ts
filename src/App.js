import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import SearchTodo from './components/SearchTodo';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.container {
  width:80vw;
  margin : 0 auto;
  border : 1px solid green;
}
a{
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
    padding:0
  }
  button {
    cursor : pointer
  }
  input {
    outline : none
  }

`;
const Container = styled.div`
  padding: 10px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AddTodo />
        <SearchTodo />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
