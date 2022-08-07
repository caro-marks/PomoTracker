import { Flex, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex justify="center" border='1px' borderBottomColor='brand.darkest' w='100vw'>
      <Text fontSize='2xl'> PomoTracker - Time Tracker with Pomodoro Technique </Text>
    </Flex>
  )
}