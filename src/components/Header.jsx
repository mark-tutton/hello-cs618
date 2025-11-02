import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useQuery } from '@tanstack/react-query'

import { getUserInfo } from '../api/users.js'

import { useAuth } from '../contexts/AuthContext'

import { User } from './User'

export function Header() {
  const [token, setToken] = useAuth()

  const { sub } = token ? jwtDecode(token) : {}
  const userInfoQuery = useQuery({
    queryKey: ['users', sub],
    queryFn: () => getUserInfo(sub),
    enable: Boolean(sub),
  })
  const userInfo = userInfoQuery.data

  if (token) {
    // const { sub } = jwtDecode(token)
    return (
      <div>
        Logged in as <User {...userInfo} />
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
