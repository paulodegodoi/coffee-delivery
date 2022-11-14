import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useState } from "react"
import { coffeeList } from "../../data/coffeeList"

import { CartAmount, CartContainer, Coffee, CoffeeListContainer, Container, Description, Image, InputAmount, Name, ShopContainer, Type, TypeContainer } from "./styles"

export function CoffeeList() {

  function formatString(string: string) {
    string = string.toLocaleLowerCase()
    string = string.replace(/ /g, "_")
    string = string.replace("é", "e",).replace("á", "a").replace("ê", "e")
    
    return string
  }

  function decreaseAmount(id: number) {
    let input = document.getElementById(`coffeeAmount_${id}`)
    let amount = parseInt((input as HTMLInputElement)?.value)
    if (amount > 1) {
      amount -= 1
    }
    (input as HTMLInputElement).value = amount.toString()
  }

  function increaseAmount(id: number) {
    let input = document.getElementById(`coffeeAmount_${id}`)
    let amount = parseInt((input as HTMLInputElement)?.value)
    if (amount >= 1) {
      amount += 1
    }
    (input as HTMLInputElement).value = amount.toString()
  }

  return (
    <Container>
      <h3>Nossos cafés</h3>
      <CoffeeListContainer>
        {coffeeList.map(coffee => (
          <Coffee key={coffee.id}>
            <Image 
              src={`src/assets/coffees/${formatString(coffee.name)}.png`} 
              alt="coffee image" 
            />
            <TypeContainer>
              {coffee.type.map((type, index) => (
                <Type key={index}>{type}</Type>
              ))}
            </TypeContainer>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>
            <ShopContainer>
              <p>R$<span>{coffee.price.toFixed(2)}</span></p>
              <CartContainer>
                <CartAmount>
                  <button onClick={(e) => decreaseAmount(coffee.id)}>
                    <Minus 
                      size={14} 
                      weight="bold"
                    />
                  </button>
                  <InputAmount 
                    id={`coffeeAmount_${coffee.id}`}
                    value={1} 
                    readOnly
                  />
                  <button onClick={(e) => increaseAmount(coffee.id)}>
                    <Plus size={14} weight="bold" />
                  </button>
                </CartAmount>
                <button>
                  <ShoppingCart className="shoppingCart" size={22} weight="fill" />
                </button>
              </CartContainer>
            </ShopContainer>
          </Coffee>
        ))}
      </CoffeeListContainer>
    </Container>
  )
}