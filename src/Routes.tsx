import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './styles/pages/Home'
import SideBar from './components/SideBar'
import History from './styles/pages/History'
import Settings from './styles/pages/Settings'
import { styled } from 'styled-components'

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
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])
