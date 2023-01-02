import styled from "styled-components"

export const Container = styled.main`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 800px) {
    gap: 50px;
    padding-bottom: 2rem;
  }
`