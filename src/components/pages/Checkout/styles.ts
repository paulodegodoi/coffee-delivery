import styled from "styled-components"

export const MainContainer = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`

export const FormContainer = styled.form`
  max-width: 650px;
  background-color: ${(props) => props.theme.colors.base_card};
  padding: 2rem 1rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;

  .mapPin {
    color: ${(props) => props.theme.colors.yellow_dark};
  }

  .description {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 1rem;

    p {
      font-size: 16px;
      margin-bottom: 0;
    }

    span {
      color: ${(props) => props.theme.colors.text};
    }
  }

  div {
    display: flex;
    gap: 10px;
  }
`

export const InputSmall = styled.input`
  max-width: 100px;
`

export const InputLarge = styled.input`
  width: 100%;
`

export const PaymentContainer = styled.div`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  p {
    font-size: 1rem;
  }

  div {
    margin: 1rem 0;
    display: flex;
    gap: 5px;
  }

  @media (max-width: 800px) {
    .paymentTypeContainer {
      width: 50%;
      margin: auto;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const PaymentType = styled.button`
  background-color: ${(props) => props.theme.colors.base_input};
  width: 100%;

  &.active {
    background-color: ${(props) => props.theme.colors.purple_light};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }

  span {
    font-size: 0.8rem;
    margin-left: 10px;
  }
`
