import { Container, Info } from "./styles"
import Logo from "../../assets/logo.png"
import { MapPin, ShoppingCart }from "phosphor-react"

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Info>
        <p>
          <MapPin 
            size={22} 
            weight="fill" 
            className="mapPin" 
          />
          Osasco, SP
        </p>
        <button className="shoppingCart">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </Info>
    </Container>
  )
}