import { CoffeeList } from "../CoffeeList";
import { Intro } from "../Intro";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Intro />
      <CoffeeList />
    </Container>
  )
}