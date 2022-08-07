import type { NextPage } from 'next'
import { Container } from '../components'
import { HomePage } from '../templates/HomePage'

const Home: NextPage = () => {
  return (
    <Container>
      <HomePage />
    </Container>
  )
}

export default Home
