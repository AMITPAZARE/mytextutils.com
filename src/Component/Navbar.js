import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
 
    
  
  return (
    
    <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.amit}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
 
            {/* Navbar 2 btn  */}
            <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/mytextutils.com">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>

            <li className="nav-item">
              <a className="nav-link disabled" ></a>
            </li>
          </ul>
          
           
          
          
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? "Enable Light Mode" : "Enable Dark Mode"}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  amit: PropTypes.string
}