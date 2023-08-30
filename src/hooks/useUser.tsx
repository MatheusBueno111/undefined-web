import { useQuery } from 'react-query'
import { fetchUsers } from '../fetchers/fetchUsers'

export function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryFn: () => fetchUsers(),
    queryKey: ['users'],
  })
  console.log(users)
  return { users, isLoading }
}
