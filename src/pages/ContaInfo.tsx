import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import CardInfo from "../components/CardInfo"
import { api } from "../api"
import { UserData } from "./Conta"
import { Card } from "../components/Card"

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const navigate = useNavigate()

    const { isLoggedIn } =  useContext(AppContext)

    if(!isLoggedIn) {
        navigate('/')
    }

    useEffect(() => {
          const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
    
        getData()
    }, [])
    

    return (
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
                          <Card>
                            <Text fontSize='2xl' fontWeight='bold'>
                                Informações da conta
                            </Text>
                          </Card>
                          <CardInfo mainContent= 'Nome' content={`${userData.name}`}/>
                          <CardInfo mainContent='Email' content={`R$ ${userData.email}`}/>
                          <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                        </>
                    )
                } 
            </SimpleGrid>
            </Center>
            <Link to='/conta/1' style={{
                backgroundColor: 'blue', color: 'black', width: '100%', 
                padding: '25px', 
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '30px'}}>
                  Conta
            </Link>
        </>
    )
}

export default ContaInfo