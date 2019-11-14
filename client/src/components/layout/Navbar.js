import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-blueberry">
        <h1>
          <Link to="/"><i className="fab fa-forumbee" /> Busy BEE</Link>
        </h1>
        <ul>
          <li><Link to="/">Developer</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
