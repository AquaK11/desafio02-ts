import { 
  Box,
  Center,
  Input
} from '@chakra-ui/react'
import {Card} from '../components/Card' 
import { useContext, useState } from 'react';
import { Botao } from '../components/Button';
import { login } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
    const [ email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async(email: string, senha: string) => {
      const loggedIn = await login(email, senha)

      if(!loggedIn) {
        return alert('Email ou senha inválido')
      }

      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      navigate(`/conta/1`)
    }

    return(
        <Box padding='25px'>
         <Card>
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input placeholder="password" value={senha} onChange={(event) => setSenha(event.target.value)}/>
            <Center>
              <Botao onClick={() => validateUser(email,senha)}/>
            </Center>
         </Card>
        </Box>
    )
}

export default Home