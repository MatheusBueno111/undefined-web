import React from 'react'

interface ButtonTextProps {
  text: string
}

const ButtonText: React.FC<ButtonTextProps> = ({ text }) => {
  return <div>{text}</div>
}

export default ButtonText
