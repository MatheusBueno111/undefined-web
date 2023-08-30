import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SideBar from './components/SideBar'

import Settings from './pages/Settings'
import UsersTable from './pages/UsersTable'
import { styled } from 'styled-components'
import ProductsTable from './pages/ProductsTable'
import History from './pages/History'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    index: false,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/products',
        element: <ProductsTable />,
        index: false,
      },
      {
        path: '/users',
        element: <UsersTable />,
        index: false,
      },
      {
        path: '/history',
        element: <History />,
        index: false,
      },
      {
        path: '/settings',
        element: <Settings />,
        index: false,
      },
    ],
  },
])
