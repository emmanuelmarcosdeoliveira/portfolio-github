import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GitHubStatus } from './Styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre Min</Title>
    <Paragrafo tipo="principal">Obtendo minha Formação pela EBAC</Paragrafo>
    <Paragrafo tipo="principal">
      Atualmente estou em transição de carreira para área de Desenvolvimento de
      Software FullStack.
    </Paragrafo>
    <Paragrafo tipo="principal">
      Objetivo Profissional: Almejo uma posição como Engenheiro de Software -
      Desenvolvedor Full Stack, com o intuito de colaborar com equipes
      talentosas em projetos que se caracterizam por seus desafios e inovação.
    </Paragrafo>

    <Paragrafo tipo="principal">
      Comprometimento: Minha dedicação em aprender e me especializar com novas
      tecnologias, aliada à minha vontade de aprender, me qualifica como um
      candidato ideal para a posição.
    </Paragrafo>
    <Paragrafo tipo="principal">
      Abordagem de Trabalho: Valorizo a colaboração, juntamente com o trabalho
      em equipe, e estou sempre buscando maneiras de melhorar e crescer.
    </Paragrafo>
    <GitHubStatus>
      <img src="https://github-readme-stats.vercel.app/api?username=emmanuelmarcosdeoliveira" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=emmanuelmarcosdeoliveira&layout=compact&langs_count=8&card_width=401" />
    </GitHubStatus>
  </section>
)
export default Sobre
