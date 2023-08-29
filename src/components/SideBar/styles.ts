import { styled } from 'styled-components'

interface Props {
  $isOpen: boolean
}

interface NavButtonProps extends Props {
  selected: boolean
}

export const Container = styled.aside<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;

  max-width: ${({ $isOpen }) => ($isOpen ? '29rem' : '16rem')};
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 0 1.6rem 1.6rem;
  gap: 4.8rem;
  transition: max-width 0.2s ease-out;
`

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  a {
    all: unset;
    display: flex;
  }
`

export const NavHeaderButton = styled.button<Props>`
  display: flex;
  align-self: center;
  margin-right: ${({ $isOpen }) => ($isOpen ? 'unset' : '1.6')};
`

export const NavButton = styled.button<NavButtonProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: ${({ $isOpen }) => ($isOpen ? '1.2rem' : 'unset')};
  justify-content: ${({ $isOpen }) => ($isOpen ? 'unset' : 'center')};
  font-size: 1.8rem;
  align-items: center;
  padding: 0.8rem 1.2rem;
  font-weight: 700;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.blue : theme.colors.backgroundDark};
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;

  span {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    transition: background-color 0.4s ease-out;
  }
`
