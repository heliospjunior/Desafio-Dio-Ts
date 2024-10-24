
import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"
import {login} from "../services/login"
import { Header } from "./Header"
import { Botao } from "./Button"

export const Card = () => {
  return(
    <div>
      <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Botao />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
    </div>
  )
}