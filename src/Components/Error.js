import React from 'react'
import {  Link } from 'react-router-dom'

const Error = (props) => {
    return (
        <div>
            <h1>Page not found</h1>
            <h1>404</h1>
            <Link to='/'>Go home</Link>
        </div>
    )
}

export default Error;