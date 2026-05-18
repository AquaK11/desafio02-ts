import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Heading
} from '@chakra-ui/react'
import {login} from './services/login';
import {Botao} from './components/Button'

export const Card = () => {
  return(
   <ChakraProvider>
         <Heading size = '3xl' backgroundColor='#7113dc'>
           <Center>
             Dio Bank
           </Center>
         </Heading>
         <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
           <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
             <Center>
               <h1>Faça o login</h1>
             </Center>
             <Input placeholder="email" />
             <Input placeholder="password" />
             <Center>
               <Botao loginF={login}/>
             </Center>
           </Box>
         </Box>
       </ChakraProvider>
  )
}