import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ToDoContext = createContext({});

export const ToDoProvider = ({ children }) => {
  const [todos, setToDos] = useState([]);

  const value = {
    todos,
    setToDos,
  }
  console.log(todos);
  return(
    <ToDoContext.Provider value={ value }>
      { children }
    </ToDoContext.Provider>
  )
}

ToDoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
