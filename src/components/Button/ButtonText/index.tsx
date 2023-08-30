import React from 'react'
import * as S from './styles'

interface ButtonTextProps {
  text: string
}

const ButtonText: React.FC<ButtonTextProps> = ({ text }) => {
  return <div>{text}</div>
}

export default ButtonText
