import React from 'react'
import * as S from './styles'
import { useRegisters } from '../../hooks/useRegisters'
import { formatDate } from '../../utils/formatDate'
import Header from '../../components/Header'

const History: React.FC = () => {
  const { registers } = useRegisters()

  return (
    <S.Container>
      <Header />
      <h2>Histórico</h2>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>Usuário ID</S.TableHeader>
            <S.TableHeader>Produto ID </S.TableHeader>
            <S.TableHeader>Quantidade</S.TableHeader>
            <S.TableHeader>Registrado em</S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {registers
            ? registers?.map((register) => (
                <S.TableRow key={register.id}>
                  <S.TableData>{register.userId}</S.TableData>
                  <S.TableData>{register.productId}</S.TableData>
                  <S.TableData>{register.amount}</S.TableData>
                  <S.TableData>{formatDate(register.createdAt)}</S.TableData>
                </S.TableRow>
              ))
            : null}
        </S.TableBody>
      </S.Table>
    </S.Container>
  )
}

export default History
