import React from "react"
import { Link } from "gatsby"

import "../utils/base.css";
import Head from '../components/head'
import Header from '../components/home/header'
import Main from '../components/home/main'
import Footer from '../components/home/footer'

const IndexPage = () => {
  return (
    <>
      <Head title="Eddie Chu" />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default IndexPage
