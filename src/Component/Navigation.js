import React from 'react'
import { NavLink } from 'react-router-dom'


function Navigation() {
    return (
        <div className='nav'>
            <h2>Nav Component</h2>
            <NavLink to='/'><h3>HOME</h3></NavLink>
            <NavLink to='/search'><h3>GO TO SEARCH PAGE</h3></NavLink>
        </div>
    )
}

export default Navigation