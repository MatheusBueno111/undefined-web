import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './styles/pages/Home'
import SideBar from './components/SideBar'
import History from './styles/pages/History'
import Settings from './styles/pages/Settings'

const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
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
