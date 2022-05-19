import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Header from '../components/main/Header';

export default function ToDoListHomePage() {
  return (
    <Flex height='100vh' justifyContent='center'>
      <Header />
    </Flex>
  )
}