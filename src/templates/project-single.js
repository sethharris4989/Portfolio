import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SingleProjectTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulProject')
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="single-project-section">
        <div className="container">
          <h1 className="headline">{post.title}</h1>
          <div className="box">
            <div className="box-left">
              <Slider {...settings}>
                {post.gallery.map(({ fluid }) => {
                  return (
                    <BackgroundImage fluid={fluid} backgroundColor={`#040e18`} />
                  )
                })}
              </Slider>
            </div>
            <div className="box-right">
              <h2>Details</h2>
              <p>{post.introduction.introduction}</p>
              <div className="site-link">
                <Link className="btn" target="_blank" to={post.siteLink}>View Site</Link>
                <Link className="inline-btn" to="/projects">Back to Projects</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      id
      siteLink
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
`
