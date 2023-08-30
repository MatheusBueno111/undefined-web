import { useQuery } from 'react-query'
import { fetchregisters } from '../fetchers/fetchRegisters'

export function useRegisters() {
  const { data: registers, isLoading } = useQuery({
    queryFn: () => fetchregisters(),
    queryKey: ['registers'],
    staleTime: 60 * 1000,
  })

  return { registers, isLoading }
}
