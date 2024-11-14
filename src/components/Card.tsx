
import { Box, ChakraProvider} from "@chakra-ui/react"


export const Card = ( { children}: any) => {

  
  
  return (
    <div>
      <ChakraProvider>
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          {children}
              
        </Box>
      </ChakraProvider>
    </div>
  );
}