import React from 'react';
import {Nav,NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
const Navbar = ({searchInput,setSearchInput,handleSearchMovie}) => {


    const handleSearchChange = (e) => {
          setSearchInput(e.target.value);
    }

    return (
          <div className="Navbar">
              <Nav className="movies-navbar">
                  <h1>Movie App</h1>
                  <NavItem className="navbar-item">
                      <NavLink className="nav-link" to="/">Discover</NavLink>
                  </NavItem>
                  <NavItem className="navbar-item">
                      <NavLink className="nav-link" to="/popular">Popular</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to="/search">
                          <form className="search-form" onSubmit={handleSearchMovie}>
                              <input className="search-input"
                                     type="search"
                                     placeholder="Search"
                                     value={searchInput}
                                     onChange={handleSearchChange}
                              />
                          </form>
                      </NavLink>
                  </NavItem>
              </Nav>
              <hr />
          </div>
      );
}

export default Navbar;