import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  justify-content: flex-end;
  gap: 0.8rem;

  align-items: center;
  span {
    font-size: 1.6rem;
  }
`

export const OptionsContainer = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  display: flex;
  width: 22rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.24);
`

export const OptionItem = styled.li`
  display: flex;
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  padding: 0.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.4rem;
  }
  font-size: 1.4rem;
`
