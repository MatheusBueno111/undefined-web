import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  flex-direction: row;
  height: fit-content;
  justify-content: space-between;
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    border: 1px solid;
    padding: 1px;
    border-color: ${({ theme }) => theme.colors['text-dark']};
  }
`
