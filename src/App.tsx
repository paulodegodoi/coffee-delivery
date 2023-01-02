import { ThemeProvider } from "styled-components"
import colors from "./styles/themes/colors"
import GlobalStyles from "./styles/global"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { useState } from "react"

function App() {
  let [units, setUnits] = useState(0)

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Header units={units} />
      <Main units={units} setUnits={setUnits} />
    </ThemeProvider>
  )
}

export default App
