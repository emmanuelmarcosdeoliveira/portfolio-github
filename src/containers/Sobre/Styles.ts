import styled from 'styled-components'

export const GitHubStatus = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  img {
    margin: 0px 12px 0 0;
    height: 157px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
