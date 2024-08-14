import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import ErrorPage from './components/ErrorPage'
import Register from './pages/Register'
import Home from './pages/Home'
import Settings from './pages/Settings'
import NoteDetail from './pages/NoteDetail'
import Layout from './pages/Layout'
import AddNote from './pages/AddNote'

const router = createBrowserRouter([
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
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/settings',
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/add-note',
        element: <AddNote />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/note-detail/:id',
        element: <NoteDetail />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
