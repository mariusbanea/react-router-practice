import React from 'react'
import { NavLink } from 'react-router-dom'


function Navigation() {
    return (
        <div className='nav'>
            <h2>Nav Component</h2>
            <NavLink to='/'><h3>Home page</h3></NavLink>
            <NavLink to='/child'><h3>Child page</h3></NavLink>
            <NavLink to='/blah'><h3>Error page</h3></NavLink>
        </div>
    )
}

export default Navigation
