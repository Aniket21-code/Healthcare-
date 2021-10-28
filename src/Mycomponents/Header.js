import React,{ useState } from 'react'
import  PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import form from '/Mycomponents/form.html'

// import Form1 from 'Form1.js'


export default function Header(props) {
    return (
    
    <div class="sticky-top">
       <div >
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"  ><img src="Talens General Hospital (1).ico" alt=".."style={{ height:"50px",width:"60px"}}/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Form1.js">Form1</a>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Self checks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Buy Medicines</Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdown}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><Link className="dropdown-item" to="/Form">Register</Link></li>
            <li><Link className="dropdown-item" to="#">User/Admin login</Link></li>
            <li><Link className="dropdown-item"to="#">check Hospitals/Clinics</Link></li>
           
           
          </ul>
        </li>
      </ul>
      <form className="d-flex ">
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} forhtml="flexSwitchCheckDefault" >Enable Darkmode</label>
       <div className="form-check form-switch">
        
        <input className="form-check-input " onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        
     </div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className=" btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
    </div>
  )
}
;
//this is how we can give a proptype to a prop
Header.propTypes={title:PropTypes.string}
// Header.defaultProps={title:'great'};

