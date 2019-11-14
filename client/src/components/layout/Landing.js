import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="overlay">
          <div className="landing-inner">
            <h1 className="x-large">Busy Bee</h1>
            <p className="lead">
              Create a profile and get BUSY! People all over Mongolia are looking
              for people to help them with their projects.
            </p>
            <div className="buttons">
              <Link to="/register" className="btn sign-up">Sign Up</Link>
              <Link to="/login" className="btn login">Login</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
