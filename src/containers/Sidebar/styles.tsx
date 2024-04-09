import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export default Descricao

export const BotaoTema = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.bgColor};
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  @media (max-width: 768px) {
    margin-bottom: 36px;
    text-align: center;
  }
`
