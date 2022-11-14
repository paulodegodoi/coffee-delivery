import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 104px;
  padding: 2rem 0;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p, svg {
    display: flex;
    align-items: center;
    border-radius: 7px;
    height: 100%;
  }

  p {
    width: auto;
    padding: 8px;
    justify-content: center;
    color: ${props => props.theme.colors.purple_dark};
    background-color: ${props => props.theme.colors.purple_light};

    .mapPin {
    color: ${props => props.theme.colors.purple};
  }
  }

  .shoppingCart {
    color: ${props => props.theme.colors.yellow_dark};
    background-color: ${props => props.theme.colors.yellow_light};
  }
`