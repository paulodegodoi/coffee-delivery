import {
  FormContainer,
  InputLarge,
  InputSmall,
  PaymentContainer,
  PaymentType,
} from "./styles"
import { CurrencyDollar, MapPin } from "phosphor-react"

export default function Checkout() {
  return (
    <div>
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
        <CurrencyDollar size={22} />
        <p>Pagamento</p>
        <span>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar.
        </span>
        <div>
          <PaymentType>CARTÃO DE CRÉDITO</PaymentType>
          <PaymentType>CARTÃO DE DÉBITO</PaymentType>
          <PaymentType>DINHEIRO</PaymentType>
        </div>
      </PaymentContainer>
    </div>
  )
}
