import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import { Command, FileSearch, Gear, List } from 'phosphor-react'
import { Link } from 'react-router-dom'

type SideBarProps = ComponentProps<'aside'>

const SideBar: React.FC<SideBarProps> = ({ ...rest }) => {
  const [selectedItem, setSelectedItem] = useState('dashboard')
  const [isOpen, setIsOpen] = useState(false)
  const toggleSideBar = () => {
    setIsOpen((value) => !value)
  }
  return (
    <S.Container {...rest} $isOpen={isOpen}>
      <S.NavBar>
        <S.NavHeaderButton $isOpen={isOpen} onClick={toggleSideBar}>
          <List size={48} />
        </S.NavHeaderButton>
        <Link to="/">
          <S.NavButton
            $isOpen={isOpen}
            selected={selectedItem === 'dashboard'}
            onClick={() => setSelectedItem('dashboard')}
          >
            <Command size={24} weight="bold" />
            <span>Dashboard</span>
          </S.NavButton>
        </Link>
        <Link to="/history">
          <S.NavButton
            $isOpen={isOpen}
            selected={selectedItem === 'history'}
            onClick={() => setSelectedItem('history')}
          >
            <FileSearch size={24} weight="bold" />
            <span>History</span>
          </S.NavButton>
        </Link>
        <Link to="/settings">
          <S.NavButton
            $isOpen={isOpen}
            selected={selectedItem === 'settings'}
            onClick={() => setSelectedItem('settings')}
          >
            <Gear size={24} weight="bold" />
            <span>Settings</span>
          </S.NavButton>
        </Link>
      </S.NavBar>
    </S.Container>
  )
}

export default SideBar
