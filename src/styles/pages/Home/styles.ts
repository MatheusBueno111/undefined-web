import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 1rem 25rem 1rem 30rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`
