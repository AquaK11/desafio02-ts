import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState, useContext} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { Link } from "react-router-dom"


export interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } =  useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
    }

    getData()
  }, [])

  if(userData && id !== userData.id) {
    navigate('/')
  }

  const actualData = new Date()

    return(
      <>
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
        <Link to='/infoconta' style={{
          backgroundColor: 'blue', color: 'black', width: '100%', 
          padding: '25px', 
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: '30px'}}>
            Informações da Conta
        </Link>
      </>
    )
}

export default Conta