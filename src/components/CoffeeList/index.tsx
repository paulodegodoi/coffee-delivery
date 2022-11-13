import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { coffeeList } from "../../data/coffeeList"

import { CartAmount, CartContainer, Coffee, CoffeeListContainer, Container, Description, Image, InputAmount, Name, ShopContainer, Type, TypeContainer } from "./styles"

export function CoffeeList() {

  function formatString(string: string) {
    string = string.toLocaleLowerCase()
    string = string.replace(/ /g, "_")
    string = string.replace("é", "e",).replace("á", "a").replace("ê", "e")
    
    return string
  }

  return (
    <Container>
      <h3>Nossos cafés</h3>
      <CoffeeListContainer>
        {coffeeList.map(coffee => (
          <Coffee>
            <Image 
              src={`src/assets/coffees/${formatString(coffee.name)}.png`} 
              alt="" 
            />
            <TypeContainer>
              {coffee.type.map(type => (
                <Type>{type}</Type>
              ))}
            </TypeContainer>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>
            <ShopContainer>
              <p>R$<span>{coffee.price.toFixed(2)}</span></p>
              <CartContainer>
                <CartAmount>
                  <Minus size={14} weight="bold" />
                  <InputAmount 
                    name="" 
                    value={1} 
                    readOnly
                  />
                  <Plus size={14} weight="bold" />
                </CartAmount>
                <ShoppingCart className="shoppingCart" size={22} weight="fill" />
              </CartContainer>
            </ShopContainer>
          </Coffee>
        ))}
      </CoffeeListContainer>
    </Container>
  )
}