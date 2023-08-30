import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  width?: string
  padding?: string
  $border?: boolean
  $bgColor?: string
  color?: string
}

const ButtonRoot: React.FC<ButtonRootProps> = ({
  children,
  width,
  padding,
  $border,
  $bgColor,
  color,
  ...rest
}) => {
  return (
    <S.Container
      {...rest}
      width={width}
      padding={padding}
      $border={$border}
      $bgColor={$bgColor}
      color={color}
    >
      {children}
    </S.Container>
  )
}

export default ButtonRoot
