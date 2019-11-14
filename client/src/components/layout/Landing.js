import React from 'react'

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Busy Bee</h1>
            <p className="lead">
              Create a profile and get BUSY! People all over Mongolia are looking
              for people to help them with their projects.  
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">Sign Up</a>
              <a href="login.html" className="btn btn-light">Login</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
