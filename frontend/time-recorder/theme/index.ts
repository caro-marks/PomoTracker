import { extendTheme } from "@chakra-ui/react"

/* const styles = {
  global: {
    body: {
      color: 'brand.black',
    },
  },
} */

const colors = {
  brand: {
    darkest: '#2B393B',
    dark: '#4E6A6A',
    base: '#4E764E',
    light: '#74A059',
    lightest: '#A5BE7D',
  },
}

const fonts = {
  body: 'Rubik',
}

export default extendTheme({ colors, fonts })