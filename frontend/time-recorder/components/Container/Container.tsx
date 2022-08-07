import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <Flex align='center' justify='space-between' direction='column' minH='100vh' backgroundColor='brand.base'>
      <Header />
      <Flex justify='center' w="90vw">
        { children }
      </Flex>
      <Footer />
    </Flex>
  )
}