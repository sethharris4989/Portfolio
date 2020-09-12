import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <div className="title">
        <h1>Seth Harris</h1>
        <p>Web Developer | Knoxville, TN</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
