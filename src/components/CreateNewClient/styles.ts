import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormNewClient = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
  }

  label {
    font-size: 2.2rem;
    font-weight: 700;
  }
`

export const Input = styled.input`
  display: flex;
  width: fit-content;
  border: none;
  padding: 0.8rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10rem;
  width: fit-content;
  gap: 1.2rem;
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: auto;
`
