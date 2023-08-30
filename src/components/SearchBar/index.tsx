import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

type SearchBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <S.Container className="search">
      <MagnifyingGlass size={24} />
      <input
        type="text"
        placeholder="Pesquise aqui ..."
        onChange={handleChange}
      />
    </S.Container>
  )
}

export default SearchBar
