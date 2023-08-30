import React, { ElementType } from 'react'
import * as S from './styles'

interface ButtonIconProps {
  icon: ElementType
  weight?: string
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, weight }) => {
  return (
    <S.Container>
      <Icon weight={weight} />
    </S.Container>
  )
}

export default ButtonIcon
