import { ThemeProvider } from "styled-components"
import colors from "./styles/themes/colors"
import GlobalStyles from "./styles/global"
import { Header } from "./components/Header"
import { Main } from "./components/pages/Home"
import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import MainRoutes from "./routes"

function App() {
  let [units, setUnits] = useState(0)

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Router>
        <Header units={units} />
        <MainRoutes units={units} setUnits={setUnits} />
      </Router>
    </ThemeProvider>
  )
}

export default App
