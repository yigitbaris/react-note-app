import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

interface RouteError {
  status?: number
  message?: string
}

const ErrorPage = () => {
  const error = useRouteError()
  const routeError = error as RouteError

  console.log(routeError)

  if (routeError.status === 404) {
    return (
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to='/home'>Back Home</Link>
      </div>
    )
  }

  return (
    <div>
      <h3>something went wrong</h3>
    </div>
  )
}
export default ErrorPage
