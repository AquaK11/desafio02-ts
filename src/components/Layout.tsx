import { Box } from "@chakra-ui/react"
import { HeaderA } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc'>
      <HeaderA />
      { children }
    </Box>
  )
}
