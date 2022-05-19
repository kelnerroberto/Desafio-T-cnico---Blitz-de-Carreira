import React, { useEffect, useState } from 'react';
import { Text, VStack, HStack, StackDivider, IconButton, Spacer } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa';

export default function ListComponent() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }, []);

  const deleteToDo = (id) => {
    const newToDoList = todos.filter(eachOfList => {
      eachOfList.id !== id
    });
    setTodos(newToDoList);
    localStorage.setItem('todos', JSON.stringify(newToDoList));
  }

  return(
    <VStack
      divider={<StackDivider />}
      spacing={3}
      borderColor='gray.100'
      borderWidth='1px'
      p='3'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      align='stretch'
    >
      {
        todos.map(todo => (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound='true'
              onClick={ () => deleteToDo() } 
            />
          </HStack>
        ))
      }
    </VStack>
  )
}