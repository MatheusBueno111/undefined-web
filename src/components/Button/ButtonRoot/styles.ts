import { styled } from 'styled-components'

interface SelectProps {
  width?: string
  padding?: string
  $border?: boolean
  $bgColor?: string
  color?: string
}

export const Container = styled.button<SelectProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme, $bgColor }) => $bgColor || theme.colors.blue};
  width: ${({ width }) => width || 'fit-content'};
  padding: ${({ padding }) => padding || 'unset'};
  border: ${({ $border }) => ($border ? '1px solid #A8A8B3' : 'unset')};
  color: ${({ theme, color }) => color || theme.colors.white};
  border-radius: 0.4rem;
  font-weight: 700;
  margin-top: auto;

  &:not(:disabled) {
    color: ${({ theme, color }) => color || theme.colors.white};
    background: ${({ theme, $bgColor }) => $bgColor || theme.colors.blue};

    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.backgroundDark};
    cursor: not-allowed;

    &:hover {
      opacity: 0.9;
    }
  }
`
