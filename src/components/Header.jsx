import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

import { useAuth } from '../contexts/AuthContext'

export function Header() {
  const [token, setToken] = useAuth()

  if (token) {
    const { sub } = jwtDecode(token)
    return (
      <div>
        Logged in as <b>{sub}</b>
        <br />
        <button onClick={() => setToken(null)}>Logout</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <Link to='/login'>Login</Link> | <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
