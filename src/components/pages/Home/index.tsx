import { CoffeeList } from "../../CoffeeList"
import { Intro } from "../../Intro"
import { Container } from "./styles"

interface IHome {
  units: number
  setUnits: (value: number) => void
}

export function Home({ units, setUnits }: IHome) {
  return (
    <Container>
      <Intro />
      <CoffeeList units={units} setUnits={setUnits} />
    </Container>
  )
}
