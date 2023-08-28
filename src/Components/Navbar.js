import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">Conference</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter by Country
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/us">United States</Link></li>
              <li><Link className="dropdown-item" to="/in">India</Link></li>
              <li><Link className="dropdown-item" to="/fr">France</Link></li>
              <li><Link className="dropdown-item" to="/jp">Japan</Link></li>
              <li><Link className="dropdown-item" to="/gr">Germany</Link></li>
              <li><Link className="dropdown-item" to="/sp">Singapore</Link></li>
              <li><Link className="dropdown-item" to="/nt">Netherlands</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter by Month
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/apr">April 2023</Link></li>
              <li><Link className="dropdown-item" to="/may">May 2023</Link></li>
              <li><Link className="dropdown-item" to="/jun">June 2023</Link></li>
              <li><Link className="dropdown-item" to="/aug">August 2023</Link></li>
              <li><Link className="dropdown-item" to="/sep">September 2023</Link></li>
              <li><Link className="dropdown-item" to="/oct">October 2023</Link></li>
              <li><Link className="dropdown-item" to="/nov">November 2023</Link></li>
              <li><Link className="dropdown-item" to="/dec">December 2023</Link></li>
              <li><Link className="dropdown-item" to="/may24">May 2024</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By Timeline
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/sortAsc">Sooner to Later</Link></li>
              <li><Link className="dropdown-item" to="/sortDesc">Later to Sooner</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
