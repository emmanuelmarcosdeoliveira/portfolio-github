import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  },
  body {
    padding-block: 80px;
    @media (max-width: 768px) {
      padding-top: 1rem;
    }
  },
  `

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
  img {
    max-width: 100%;
  }
`
export default EstiloGlobal
