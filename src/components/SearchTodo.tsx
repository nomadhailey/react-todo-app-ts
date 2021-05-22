import React from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  border: 1px solid #d8d8d8;
`;

const SearchTodo = () => {
  return (
    <div className="container">
      <FontAwesomeIcon icon={faSearch} color="gray" />
    </div>
  );
};

export default SearchTodo;
