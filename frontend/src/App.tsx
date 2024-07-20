import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import ErrorPage from './components/ErrorPage'
import Register from './pages/Register'
import Home from './pages/Home'
import Settings from './pages/Settings'
import NoteDetail from './pages/NoteDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/login' replace />,
    errorElement: <ErrorPage />,
  },
  {
    index: true,
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/settings',
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/note-detail/:id',
    element: <NoteDetail />,
    errorElement: <ErrorPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
