import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GitHubStatus } from './Styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre Min</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem
      architecto facere neque animi, ipsum, dolores sapiente sed minima
      veritatis magnam nulla velit recusandae, sit repellat dicta quisquam
      quidem incidunt?
    </Paragrafo>
    <GitHubStatus>
      <img src="https://github-readme-stats.vercel.app/api?username=emmanuelmarcosdeoliveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />

      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emmanuelmarcosdeoliveira&layout=compact&langs_count=7&theme=dracula" />
    </GitHubStatus>
  </section>
)

export default Sobre
