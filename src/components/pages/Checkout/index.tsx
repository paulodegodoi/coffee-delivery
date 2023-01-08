import {
  FormContainer,
  InputLarge,
  InputSmall,
  MainContainer,
  PaymentContainer,
  PaymentType,
} from "./styles"
import { CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react"
import { useState } from "react"

export default function Checkout() {
  const [active, setActive] = useState("")

  function handleActiveButton(btn: EventTarget) {
    const button = btn as HTMLElement
    setActive(button.id)
  }

  return (
    <MainContainer>
      <h3>Complete seu pedido</h3>
      <FormContainer>
        <div>
          <MapPin size={22} className="mapPin" />
          <div className="description">
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <InputSmall type="number" placeholder="CEP" />
        <InputLarge placeholder="Rua" />
        <div>
          <InputSmall type="number" placeholder="Número" />
          <InputLarge placeholder="Complemento" />
        </div>
        <div>
          <InputSmall placeholder="Bairro" />
          <InputLarge placeholder="Cidade" />
          <InputSmall placeholder="UF" />
        </div>
      </FormContainer>
      <PaymentContainer>
        <div>
          <CurrencyDollar size={22} />
          <p>Pagamento</p>
        </div>
        <div>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </span>
        </div>
        <div className="paymentTypeContainer">
          <PaymentType
            id="creditCard"
            className={active == "creditCard" ? "active" : ""}
            onClick={(e) => handleActiveButton(e.target)}
          >
            <CreditCard size={15} />
            CARTÃO DE CRÉDITO
          </PaymentType>
          <PaymentType
            id="debitCard"
            className={active == "debitCard" ? "active" : ""}
            onClick={(e) => handleActiveButton(e.target)}
          >
            <CreditCard size={15} />
            <span>CARTÃO DE DÉBITO</span>
          </PaymentType>
          <PaymentType
            id="boleto"
            className={active == "boleto" ? "active" : ""}
            onClick={(e) => handleActiveButton(e.target)}
          >
            <Money size={15} />
            <span>DINHEIRO</span>
          </PaymentType>
        </div>
      </PaymentContainer>
    </MainContainer>
  )
}
