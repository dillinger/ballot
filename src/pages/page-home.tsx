import * as React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return <div>
    <Link to="/create">Create a Poll</Link>
    <Link to="questions">List of polls</Link>
    {/* <Link></Link> */}
  </div>
}
