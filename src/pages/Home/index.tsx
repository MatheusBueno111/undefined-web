import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import CreateNewClient from '../../components/CreateNewClient'
import CreateNewProduct from '../../components/CreateNewProduct'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.Wrapper>
          <CreateNewClient />
        </S.Wrapper>
        <S.Wrapper>
          <CreateNewProduct />
        </S.Wrapper>
      </S.Main>
    </S.Container>
  )
}

export default Home
