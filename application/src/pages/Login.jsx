import { Flex } from '@chakra-ui/layout';
import React from 'react';
import FormCard from '../components/login/FormCard';

export default function Login() {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <FormCard />
    </Flex>
  )
}