import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ToDoContext = createContext({});

export const ToDoProvider = ({ children }) => {
  const [todos, setToDos] = useState([{ id: 1, body: 'First item' }]);

  const value = {
    todos,
    setToDos,
  }

  return(
    <ToDoContext.Provider value={ value }>
      { children }
    </ToDoContext.Provider>
  )
}

ToDoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
