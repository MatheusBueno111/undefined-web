import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { useProducts } from '../../hooks/useProducts'
import { formatDate } from '../../utils/formatDate'

const ProductsTable: React.FC = () => {
  const { products } = useProducts()
  return (
    <S.Container>
      <Header />
      <h2>Produtos</h2>
      <S.Table>
        <S.TableHead>
          <S.TableRow className="table-head">
            <S.TableHeader>Nome</S.TableHeader>
            <S.TableHeader>Id</S.TableHeader>
            <S.TableHeader>Criado em</S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {products ? (
            products?.map((product) => (
              <S.TableRow key={product.id}>
                <S.TableData>{product.name}</S.TableData>
                <S.TableData>{product.id}</S.TableData>
                <S.TableData>{formatDate(product.createdAt)}</S.TableData>
              </S.TableRow>
            ))
          ) : (
            <S.TableRow>
              <S.TableData>-</S.TableData>
              <S.TableData>-</S.TableData>
              <S.TableData>-</S.TableData>
              <S.TableData>-</S.TableData>
            </S.TableRow>
          )}
        </S.TableBody>
      </S.Table>
    </S.Container>
  )
}

export default ProductsTable
