import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-blueberry">
        <h1>
          <a href="index.html"><i className="fab fa-forumbee"></i> Busy Bee</a>
        </h1>
        <ul>
          <li><a href="profiles.html">Developers</a></li>
          <li><a href="register.html">Register</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
