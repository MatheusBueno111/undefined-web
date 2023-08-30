import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (date: string) => {
  const newDate = new Date(date)
  return format(newDate, 'dd MMM yy', { locale: ptBR })
}
