import { Flex, Text } from '@chakra-ui/react'

type ClockProps = {
  minutes: string
  seconds: string
}

export const Clock = ({ minutes, seconds }: ClockProps): JSX.Element => {
  return (
    <Flex>
      <Text> {minutes}:{seconds}</Text>
    </Flex>
  )
}