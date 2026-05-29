import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import {login} from '../services/login';
import {Botao} from './Button'
import { useState } from 'react'

export const Card = () => {
  const [ email, setEmail] = useState<string>('')

  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      {/*{userData === null || userData === undefined ?
      <h1>Loading...</h1>:
      <h1>Informações carregadas</h1>}*/}
      <Center>
        <h1>Faça o login</h1>
      </Center>
        <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <Input placeholder="password" />
      <Center>
        <Botao onClick={() => login(email)}/>
      </Center>
    </Box>
  )
}