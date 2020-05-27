import { DefaultTheme } from "styled-components"

const light: DefaultTheme = {
  title: 'light',

  colors: {
    background:'#F3F5F6',
    primary:"#D52941",
    dark:"#090B0B",
    light:"#D1D9DB",
    medium:"#A4B3B7"
  }
}

const dark = {
  backgroundColor: "#ecf1f8",
  primaryColor: "#D52941",
  darkColor: "#0D090A",
  lightColor: "#ecf1f8",
  mediumColor: "#847B7C",
}

export {dark, light}
