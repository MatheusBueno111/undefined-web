import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 25rem 1rem 25rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 1rem;
  h2 {
    display: flex;
    padding: 1rem;
    text-align: center;
    align-self: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
    border-radius: 0.6rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const Table = styled.table`
  border-radius: 0.6rem;
  padding: 1.2rem;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const TableHead = styled.thead``

export const TableHeader = styled.th`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
