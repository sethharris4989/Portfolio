import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="home">
      <div className="title">
        <h1>Seth Harris</h1>
        <p>Web Developer | Knoxville, TN</p>
      </div>
    </section>
  </>
)

export default IndexPage
