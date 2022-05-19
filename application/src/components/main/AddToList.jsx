import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React from "react";

export default function AddToList() {
  return(
    <Flex p={8}>
      <HStack>
        <Input />
        <Button>Add task</Button>
      </HStack>
    </Flex>
  )
}