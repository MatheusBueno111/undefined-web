import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 25rem 1rem 25rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 1rem;

  .table-head {
    border: 1px solid;
  }
`

export const Table = styled.table`
  border-radius: 0.6rem;
  padding: 1.2rem;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

export const TableHeader = styled.th`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 65rem; /* Defina a altura máxima desejada */
  overflow-y: auto;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 0.25rem;
  }
`

export const TableData = styled.td`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const TableRow = styled.tr`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border: 0.1rem solid #d8d9da;

  border-radius: 0.25rem;

  padding: 1rem;
  &:first-child {
    margin-top: 1rem;
  }
`
export const TableHead = styled.thead``

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  border-radius: 0.6rem;
  width: 100%;

  .search-sort {
    display: flex;
    gap: 4rem;
  }
`
