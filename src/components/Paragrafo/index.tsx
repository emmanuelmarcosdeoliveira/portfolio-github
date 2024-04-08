import { P } from './styles'
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fonteSize?: number
}
const Paragrafo = ({ children, tipo = 'principal', fonteSize }: Props) => (
  <P fonteSize={fonteSize} tipo={tipo}>
    {children}
  </P>
)
export default Paragrafo
