import {Box, Button, Center, ChakraProvider, Flex, Spacer, Text } from "@chakra-ui/react"
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { info } from "console";


export const Header  = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate()

  const logout = () => {

    changeLocalStorage({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }
  
  const infos = () => {
    navigate('/info/1')
  }

  const conta = () => {
    navigate('/conta/1')
  }


  return (
    <Flex backgroundColor="orange" padding="5px">
      <Box>
        <Center>
          <Text fontSize="3xl">Dio Bank</Text>
        </Center>
      </Box>

      {isLoggedIn && (
        <>
          <Spacer/>
         
          <Button marginRight='5px' onClick={() => conta()}>Conta</Button>
          <Button marginRight='5px' onClick={() => infos()}>Informações</Button>
          <Button onClick={() => logout()}>Sair</Button>
          
        
        </>
      )}
    </Flex>
  );
}

