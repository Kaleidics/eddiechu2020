import React from 'react'
import { Link } from 'gatsby'

import Head from "../components/head"

const AboutPage = () => {
    return (
        <>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I like dogs.</p>
            <p>Go to <Link to="/contact">Contact Page</Link></p>
        </>
           
    )
}

export default AboutPage;