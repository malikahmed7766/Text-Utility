import React from 'react'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} shadow-sm sticky-top bg-${props.mode} bg-gradient`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="fs-3 fw-semibold">{props.logo}</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mt-2 mt-md-0">
            <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          </ul>
          <div className={`form-check form-switch user-select-none text-${props.text}`}>
            <input type="checkbox" className="form-check-input" onClick={props.toggleMode} name="theme" id="theme" />
            <label className="form-check-label fw-semibold" htmlFor="theme">Enabled Light Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
