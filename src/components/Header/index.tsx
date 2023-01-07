import { Container, Info } from "./styles"
import Logo from "../../assets/logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"

interface IHeader {
  units: number
}

export function Header({ units }: IHeader) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Info>
        <p>
          <MapPin size={22} weight="fill" className="mapPin" />
          Osasco, SP
        </p>
        <Link to="/checkout">
          <button className="shoppingCart">
            <ShoppingCart size={22} weight="fill" />
            {units > 0 && <span className="amount">{units}</span>}
          </button>
        </Link>
      </Info>
    </Container>
  )
}
