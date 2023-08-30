import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { useUsers } from '../../hooks/useUser'
import { formatDate } from '../../utils/formatDate'

const UsersTable: React.FC = () => {
  const { users } = useUsers()
  return (
    <S.Container>
      <Header />

      <h2>Usuários</h2>

      <S.Table>
        <S.TableHead>
          <S.TableRow className="table-head">
            <S.TableHeader>Nome</S.TableHeader>
            <S.TableHeader>Email</S.TableHeader>
            <S.TableHeader>Id</S.TableHeader>
            <S.TableHeader>Criado em</S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {users ? (
            users?.map((user) => (
              <S.TableRow key={user.id}>
                <S.TableData>{user.username}</S.TableData>
                <S.TableData>{user.email}</S.TableData>
                <S.TableData>{user.id}</S.TableData>
                <S.TableData>{formatDate(user.createdAt)}</S.TableData>
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

export default UsersTable
