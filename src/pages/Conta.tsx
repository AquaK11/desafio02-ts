import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../api"
import CardInfo from "../components/CardInfo"

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
    }

    getData()
  }, [])

  const { id } = useParams()
  const navigate = useNavigate()

  if(userData && id !== userData.id) {
    navigate('/')
  }

  const actualData = new Date()

    return(
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ): 
                    (
                        <>
                          <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}:${actualData.getSeconds()}` }/>
                          <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                        </>
                    )
                } 
            </SimpleGrid>
        </Center>
    )
}

export default Conta