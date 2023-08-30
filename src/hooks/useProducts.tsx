import { useQuery } from 'react-query'
import { fetchProducts } from '../fetchers/fetchProducts'

export function useProducts() {
  const { data: products, isLoading } = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ['products'],
  })

  return { products, isLoading }
}
