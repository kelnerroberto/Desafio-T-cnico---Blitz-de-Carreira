import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Flex, Heading } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { validateEmail, validatePassword } from "../helpers/validations";

const FormCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { toggleColorMode } = useColorMode();
  const formBg = useColorModeValue("blackAlpha.200", "blackAlpha.700");

  const handleLoginClick = () => {
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    navigate('/home/todolist');
  }

  return(
    <Flex direction='column' background={formBg} p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input 
        placeholder="Your name" 
        variant='filled' 
        mb={3} 
        type='text' 
        value={name}
        onChange={ ({ target }) => setName(target.value) }
      />
      <Input 
        placeholder="email@email.com" 
        variant='filled' 
        mb={3} 
        type='email' 
        value={email}
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <Input
        placeholder="*********"
        variant='filled'
        mb={6}
        type='password'
        value={password}
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <Button
        colorScheme='teal'
        mb={6}
        disabled={ validateEmail(email).error || validatePassword(password).error }
        type='submit'
        onClick={ () => handleLoginClick() }
      >
        Log in
      </Button>
      <Button onClick={toggleColorMode} >Dark mode?</Button>
    </Flex>
  )
}

export default FormCard;