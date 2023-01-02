import { Container, Info } from "./styles"
import Logo from "../../assets/logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"

interface IHeader {
  units: number
}

export function Header({ units }: IHeader) {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Info>
        <p>
          <MapPin size={22} weight="fill" className="mapPin" />
          Osasco, SP
        </p>
        <button className="shoppingCart">
          <ShoppingCart size={22} weight="fill" />
          <span className="amount">{units > 0 && units}</span>
        </button>
      </Info>
    </Container>
  )
}
