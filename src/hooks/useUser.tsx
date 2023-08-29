import { useQuery } from 'react-query'
import { fetchUsers } from '../fetchers/fetchUsers'

export function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryFn: () => fetchUsers(),
    queryKey: ['users'],
    staleTime: 60 * 1000, // 1 minute
  })

  return { users, isLoading }
}
