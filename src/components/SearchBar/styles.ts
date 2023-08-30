import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  width: 100%;
  padding: 0.8rem 1.2rem;

  max-width: 30rem;
  gap: 1.2rem;
  border-radius: 0.6rem;

  input {
    border: 0;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }
`
