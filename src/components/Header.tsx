import { Image, Flex, Heading } from "@chakra-ui/react"
import logo from "../logo.svg"

export const Header  = () => {
  return(
    <Flex direction='column' align='Center' justify='center' color='#FFFFFF'>
    <Image src={logo} height='70px' />
    <Heading size='xl' fontWeight='bold'>
      Dio Bank
    </Heading>
    </Flex>
        )
}

