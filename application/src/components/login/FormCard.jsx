import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const FormCard = () => {
  const { toggleColorMode } = useColorMode();
  const formBg = useColorModeValue("gray.100", "gray.700");
  return(
    <Flex direction='column' background={formBg} p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input placeholder="email@email.com" variant='filled' mb={3} type='email'/>
      <Input placeholder="*********" variant='filled' mb={6} type='password' />
      <Button colorScheme='teal' mb={6}>Log in</Button>
      <Button onClick={toggleColorMode}>Dark mode?</Button>
    </Flex>
  )
}

export default FormCard;