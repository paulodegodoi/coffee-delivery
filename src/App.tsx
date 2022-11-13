import { ThemeProvider } from "styled-components"
import colors from "./styles/themes/colors"
import GlobalStyles from "./styles/global"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

function App() {
  return (
    <ThemeProvider theme={colors}>
      <div>
        <GlobalStyles />
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}

export default App
