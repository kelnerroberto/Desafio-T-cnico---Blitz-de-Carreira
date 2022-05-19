import React from 'react';
import { Text, VStack, HStack, StackDivider, IconButton } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa';

export default function ListComponent() {
 const todos = JSON.parse(localStorage.getItem('todos'));

  return(
    <VStack divider={StackDivider}>
      {
        todos.map(todo => (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <IconButton icon={<FaTrash />} isRound='true' />
          </HStack>
        ))
      }
    </VStack>
  )
}