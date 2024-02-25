import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const navbarStyle = {
    backgroundColor: props.mode === 'dark' ? '#000' : '#343a40',
    borderBottom: props.mode === 'dark' ? '1px solid white' : '1px solid #000'
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>   

          <div className='d-flex'>
          <div class={`form-check form-switch text-${props.mode === 'light'?'#000000':'light'}`}>
              <input className="form-check-input" onClick={props.toggleAmoled} type="checkbox" role="switch" id="flexSwitchCheckDefault1"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Enable Amoled-mode</label>
            </div>
          </div>

          <div className='ms-2'>
          <div class={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault2"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Enable Dark-mode</label>
          </div>  
          </div>  
          
            
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Home",
  aboutText: "About"
}