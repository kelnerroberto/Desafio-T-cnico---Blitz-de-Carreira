import { Heading } from '@chakra-ui/layout';
import React from 'react';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  return(
    <Heading mt='8' mb='8' fontWeight='extrabold'>
      Welcome to your list, { user.name }
    </Heading>
  )
}