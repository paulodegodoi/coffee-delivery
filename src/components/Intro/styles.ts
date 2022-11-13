import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .slogan {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 588px;
    padding: .7rem 0;

    h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    color: #272221;
    line-height: 1.2;
    }

    p {
      
      font-size: 1.3rem;
      font-weight: 400;
      color: #403937;
    }

    .description {
      margin-top: 1rem;
      display: flex;
      gap: 35px;

      p {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1rem;

        svg {
          border-radius: 50%;
          width: 32px;
          height: 32px;
          color: #fff;
        }

        .shoppingCart {
          padding: 8px;
          background-color: ${props => props.theme.colors.yellow_dark};
        }

        .timer {
          padding: 8px;
          background-color: ${props => props.theme.colors.yellow};
        }

        .box {
          padding: 8px;
          background-color: ${props => props.theme.colors.text};
        }

        .coffee {
          padding: 8px;
          background-color: ${props => props.theme.colors.purple};
        }
      }
    }
  }

  .imageSite {
    display: flex;
    justify-content: center;
    width: auto;

    img {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    .imageSite {
      width: auto;

      img {
        width: 80%;
      }
    }
  }
`