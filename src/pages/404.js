import React from 'react'
import { Link } from 'gatsby'

import Head from "../components/head"

const NotFound = () => {
    return (
        <>
            <Head title="404" />
            <h1>Page not found</h1>
            <p><Link to="/">Head Home</Link></p>
        </>
    )
}

export default NotFound