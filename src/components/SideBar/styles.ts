import { Link } from 'react-router-dom'
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

  max-width: ${({ $isOpen }) => ($isOpen ? '20rem' : '15rem')};
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 0 1.6rem 1.6rem;
  gap: 4.8rem;
  transition: all 0.3s ease-out;
`

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const NavHeaderButton = styled.button<Props>`
  display: flex;
  align-self: center;
  margin-right: ${({ $isOpen }) => ($isOpen ? 'unset' : '1.6')};
`

export const NavButton = styled(Link)<NavButtonProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: ${({ $isOpen }) => ($isOpen ? '1rem' : 'unset')};
  /* justify-content: ${({ $isOpen }) => ($isOpen ? 'center' : 'center')}; */
  font-size: 1.8rem;

  padding: 0.8rem 1.2rem;
  font-weight: 700;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.blue : theme.colors.backgroundDark};
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;

  span {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  }
  .link-icon {
    display: flex;
    justify-content: center;
    width: ${({ $isOpen }) => ($isOpen ? 'unset' : '100%')};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    transition: background-color 0.4s ease-out;
  }
`
