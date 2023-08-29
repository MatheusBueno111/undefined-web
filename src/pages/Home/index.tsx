import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import CreateNewClient from '../../components/CreateNewClient'
import CreateNewProduct from '../../components/CreateNewProduct'
import { useProducts } from '../../hooks/useProducts'
import { useUsers } from '../../hooks/useUser'

const Home: React.FC = () => {
  const { products } = useProducts()
  const { users } = useUsers()
  console.log('products', products)
  console.log('users', users)
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
