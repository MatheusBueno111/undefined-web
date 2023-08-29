import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 25rem 1rem 25rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 1rem;
  h2 {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
    padding: 3rem;
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  padding: 3rem;
  border-radius: 0.8rem;
`

export const RegisterType = styled.div`
  display: flex;
  gap: 1rem;

  button {
    font-size: 2rem;
  }
  margin-bottom: 1rem;
`
