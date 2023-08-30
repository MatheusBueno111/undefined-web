import React, { ComponentProps, useState } from 'react'
import * as S from './styles'
import {
  Coffee,
  Command,
  FileSearch,
  Gear,
  List,
  UserCircle,
} from 'phosphor-react'

type SideBarProps = ComponentProps<'aside'>

const links = [
  {
    linkName: 'Dashboard',
    icon: <Command size={24} weight="bold" />,
    path: '/',
  },
  {
    linkName: 'Produtos',
    icon: <Coffee size={24} weight="bold" />,
    path: '/products',
  },
  {
    linkName: 'Usuários',
    icon: <UserCircle size={24} weight="bold" />,
    path: '/users',
  },
  {
    linkName: 'Histórico',
    icon: <FileSearch size={24} weight="bold" />,
    path: '/history',
  },
  {
    linkName: 'Settings',
    icon: <Gear size={24} weight="bold" />,
    path: '/settings',
  },
]

const SideBar: React.FC<SideBarProps> = ({ ...rest }) => {
  const [selectedItem, setSelectedItem] = useState('Dashboard')
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
        {links.map((link) => (
          <S.NavButton
            to={link.path}
            key={link.linkName}
            $isOpen={isOpen}
            selected={selectedItem === link.linkName}
            onClick={() => setSelectedItem(link.linkName)}
          >
            <div className="link-icon">{link.icon}</div>
            <span>{link.linkName}</span>
          </S.NavButton>
        ))}
      </S.NavBar>
    </S.Container>
  )
}

export default SideBar
