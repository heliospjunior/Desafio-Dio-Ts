import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { AppContext } from "../components/AppContext"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
  }

const Info = () => {

    const [ userData, setUserData ] = useState<null | UserData>()
    const {id} = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

      useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
      
    }

    getData()
  }, [])
  
   
    
   if(userData && id !== userData.id ){
      navigate('/')
   }
 
    return (
      <Center>
        <SimpleGrid columns={1} paddingTop={16}>
          {
            userData === undefined || userData === null?
            (<Center>
                <Spinner size='xl' color='white'/>
            </Center>) :
          (
         <>
          <CardInfo mainContent={`Nome: ${userData?.name}`} content={`Email: ${userData?.email}`} />
          </>
        )
        }
        </SimpleGrid>
      </Center>
    );
}

export default Info