import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const FormNewProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
  width: 20rem;
  border: none;
  padding: 0.8rem;
  border-radius: 0.6rem;
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
