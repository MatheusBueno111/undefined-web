import React, { useState } from 'react'
import * as S from './styles'
import { useRegisters } from '../../hooks/useRegisters'
import { formatDate } from '../../utils/formatDate'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import SortBySelect from './components/SortBySelect'

const History: React.FC = () => {
  const { registers } = useRegisters()

  const [searchValue, setSearchValue] = useState('')
  const [sortBy, setSortBy] = useState('') //

  const filteredRegisters = registers?.filter(
    (register) =>
      register.userId.includes(searchValue) || // Modifique para os campos desejados
      register.productId.includes(searchValue) ||
      register.amount.toString().includes(searchValue),
  )

  const sortedRegisters = sortBy
    ? (filteredRegisters || []).sort((a, b) =>
        sortBy === 'ASC' ? a.amount - b.amount : b.amount - a.amount,
      )
    : filteredRegisters || []

  return (
    <S.Container>
      <Header />

      <S.Wrapper>
        <h2>Histórico de Compras</h2>
        <div className="search-sort">
          <SortBySelect setSortBy={setSortBy} />
          <SearchBar setSearch={setSearchValue} />
        </div>
      </S.Wrapper>
      <S.Table>
        <S.TableHead>
          <S.TableRow className="table-head">
            <S.TableHeader>Usuário ID</S.TableHeader>
            <S.TableHeader>Produto ID </S.TableHeader>
            <S.TableHeader>Quantidade</S.TableHeader>
            <S.TableHeader>Registrado em</S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {sortedRegisters?.length ? (
            sortedRegisters.map((register) => (
              <S.TableRow key={register.id}>
                <S.TableData>{register.userId}</S.TableData>
                <S.TableData>{register.productId}</S.TableData>
                <S.TableData>{register.amount}</S.TableData>
                <S.TableData>{formatDate(register.createdAt)}</S.TableData>
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

export default History
