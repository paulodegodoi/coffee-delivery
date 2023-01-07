import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 800px) {
    gap: 50px;
    padding-bottom: 2rem;
  }
`
