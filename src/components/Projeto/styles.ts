import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.bgButton};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
