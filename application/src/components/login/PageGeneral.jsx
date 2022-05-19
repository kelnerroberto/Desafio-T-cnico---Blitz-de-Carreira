import React from "react";
import { Flex } from "@chakra-ui/layout";
import FormCard from "./FormCard";

const PageGeneral = () => {
  return(
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <FormCard />
    </Flex>
  )
}

export default PageGeneral;