import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fonteSize ? props.fonteSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.primaryColor
      : props.theme.secondaryColor};
  line-height: 22px;
`
