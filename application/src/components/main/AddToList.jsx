import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

export default function AddToList() {
  const [task, setTask] = useState('');
  const { todos, setToDos } = useContext(ToDoContext);

  const addToDoOnList = () => {
    const newTaskToAdd = { id: todos.length + 1, body: task };
    const newArrayOfTodos = [...todos, newTaskToAdd];
    setToDos(newArrayOfTodos);
    localStorage.setItem('todoList', JSON.stringify(newArrayOfTodos));
  }

  return(
    <Flex p={8}>
      <HStack>
        <Input
          variant='filled'
          placeholder='My next task'
          onChange={({ target }) => setTask(target.value)}
          value={task}
          />
        <Button
          onClick={() => addToDoOnList()}
        >Add task</Button>
      </HStack>
    </Flex>
  )
}