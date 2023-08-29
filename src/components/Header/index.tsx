import React from 'react'
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Container>
      <h1>Bem-Vindo</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt=""
      />
    </S.Container>
  )
}

export default Header
