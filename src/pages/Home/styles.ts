import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 25rem 1rem 25rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 1rem;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  padding: 3rem;
  border-radius: 0.8rem;
`
