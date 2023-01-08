import { Container, Info } from "./styles"
import Logo from "../../assets/logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { ICoffeeList } from "../../data/coffeeList"

interface IHeader {
  units: number
  setUnits: (n: number) => void
}

export function Header({ units, setUnits }: IHeader) {
  useEffect(() => {
    if (localStorage.hasOwnProperty("coffeeList")) {
      let items = JSON.parse(localStorage.getItem("coffeeList")!)
      let units = 0
      items.forEach((item: ICoffeeList) => {
        units += item.units!
      })
      setUnits(units)
    }
  }, [])

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
