import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SideBar from './components/SideBar'
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
      },
      {
        path: '/users',
        element: <UsersTable />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
])
