export interface Theme {
  backgroundColor: string;
  primaryColor: string;
  darkColor: string;
  lightColor: string;
  mediumColor: string;
}

const light: Theme = {
  backgroundColor: "#ecf1f8",
  primaryColor: "#D52941",
  darkColor: "#0D090A",
  lightColor: "#D4D9E0",
  mediumColor: "#BDC1C8",
}

const dark: Theme = {
  backgroundColor: "#ecf1f8",
  primaryColor: "#D52941",
  darkColor: "#0D090A",
  lightColor: "#ecf1f8",
  mediumColor: "#847B7C",
}

export {dark, light}
