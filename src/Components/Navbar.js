import React from 'react';
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#/person/2">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/person/2">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/person/2">{props.AboutText}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#/person/2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.Contact}
          </a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes= {
  title:PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  Contact: PropTypes.string.isRequired
}// Defines which type of props should be import
// .isRequired is used to specify that the props should be prsent in the app 

//Default Props
Navbar.defaultProps={
  title:'Please, put a title',
  AboutText:'Give an About',
  Contact:"Put a Contact Adress"

}
