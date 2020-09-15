import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from "../components/seo"
import Slider from "react-slick";
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulProject.edges')
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <SEO title="Projects" />
        <section className="projects-section">
          <h1 className="headline">Projects</h1>
          <div className="container">
            <ul className="project-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <div className="box">
                      <div className="box-left">
                        <div className="box-left-top">
                          <h2>{node.title}</h2>
                          <p class="line-clamp">{node.introduction.introduction}</p>
                        </div>
                        <div className="box-left-bottom">
                          <Link className="btn" to={node.slug}>See Project</Link>
                        </div>
                      </div>
                      <div className="box-right">
                        <Slider {...settings}>
                          {node.gallery.map(({ fluid }) => {
                            return (
                              <BackgroundImage fluid={fluid} backgroundColor={`#040e18`} />
                            )
                          })}
                        </Slider>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject {
      edges {
        node {
          title
          slug
          siteLink
          id
          gallery {
            fluid(maxWidth: 980) {               
              ...GatsbyContentfulFluid            
            }
          }
          introduction {
            introduction
          }
        }
      }
    }
  }
`
