import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  list-style: none;
  },
  body {
    padding-block: 80px;
    background-color: ${(props) => (props.theme as Theme).bgColor};
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
  grid-template-columns: 180px auto;
  column-gap: 56px;
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
export default EstiloGlobal
