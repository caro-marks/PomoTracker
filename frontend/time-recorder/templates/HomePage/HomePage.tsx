import { Flex } from '@chakra-ui/react'
import { Clock } from '../../components/Clock'

export const HomePage = () => {
  return (
    <Flex>
      <Clock minutes='25' seconds='00'/>
    </Flex>
  )
}