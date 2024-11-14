import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDBotao {
  onClick: MouseEventHandler;
}

export const Botao = ({ onClick }: IDBotao) => {
    return (
        
            <Button 
            onClick={onClick} 
            colorScheme='teal' 
            size='sm'
             width='100%' 
             marginTop='5px'>
             Login
            </Button>
      

    )
}