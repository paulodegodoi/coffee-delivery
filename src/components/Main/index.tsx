import { CoffeeList } from "../CoffeeList"
import { Intro } from "../Intro"
import { Container } from "./styles"

interface IMain {
  units: number
  setUnits: (value: number) => void
}

export function Main({ units, setUnits }: IMain) {
  return (
    <Container>
      <Intro />
      <CoffeeList units={units} setUnits={setUnits} />
    </Container>
  )
}
