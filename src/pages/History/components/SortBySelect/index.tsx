import React, { useState } from 'react'
import * as S from './styles'
import { CaretDown } from 'phosphor-react'

interface Option {
  option: string
  value: string
}

interface SortBySelectProps {
  setSortBy: (value: string) => void
}

const SortBySelect: React.FC<SortBySelectProps> = ({ setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: Option) => {
    setSortBy(option.value)
    setIsOpen(false)
  }

  const options = [
    {
      option: 'Quantidade: Maior - menor',
      value: 'DSC',
    },
    {
      option: 'Quantidade: Menor - maior',
      value: 'ASC',
    },
  ]

  return (
    <S.Container>
      <S.Button onClick={() => setIsOpen((value) => !value)}>
        <span>Organizar por</span>
        <CaretDown size={16} />
      </S.Button>
      {isOpen ? (
        <S.OptionsContainer>
          {options.map((option) => (
            <S.OptionItem
              key={option.option}
              onClick={() => handleSelect(option)}
            >
              {option.option}
            </S.OptionItem>
          ))}
        </S.OptionsContainer>
      ) : null}
    </S.Container>
  )
}

export default SortBySelect
