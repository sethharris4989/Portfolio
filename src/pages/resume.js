import React from "react"
import SEO from "../components/seo"

const ResumePage = () => (
  <>
    <SEO title="Resume" />
    <section className="resume-section">
      <h1 className="headline">Resume</h1>
      <div className="container">
        <div className="row">
          <div className="left-col">
            <div className="box">
              <h2>Profile</h2>
              <p>I develop and maintain web and mobile applications using a variety of technologies including PHP, ES6/JavaScript, Vue, React, NativeScript, and Sass.</p>
            </div>
            <div className="box">
              <h2>Experience</h2>
              <p><strong>Technical Developer, Designsensory; Knoxville, TN — 2017-Present</strong></p>
              <p>My job at Designsensory requires me to work closely with our designers and project managers to understand the project's vision and functional requirements. My current focus is working with REST APIs and building either single page applications or statically generated sites using Vue and Gridsome. Major projects I have worked on have included building the marketing site for the Biltmore Estate and a tourism guide mobile app for Cades Cove.</p>
              <p><strong>Front End Web Developer, Telegraph Creative; Birmingham, AL — 2013-2016</strong></p>
              <p>My main role at Telegraph Creative was to build WordPress sites by creating the architecture of the CMS, developing a fully custom theme based on a design in Photoshop or Sketch, and presenting the final product to the customer and teaching them how to use the CMS.</p>
            </div>
            <div className="box">
              <h2>EDUCATION</h2>
              <p><strong>University of Tennessee, Knoxville, TN — Bachelor of Science, Marketing and Supply Chain Management, 2010-2012</strong></p>
              <p><strong>Middle Tennessee State University, Murfreesboro, TN — Undergraduate Studies, 2007-2010</strong></p>
            </div>
          </div>
          <div className="right-col">
            <div className="box">
              <h2>SKILLS</h2>
              <ul>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Vue</li>
                <li>Nativescript</li>
                <li>WordPress</li>
                <li>Laravel</li>
                <li>React</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="box">
              <h2>AWARDS</h2>
              <ul>
                <li>
                  <a href="https://www.biltmore.com/" target="_blank" rel="noreferrer">2020 Addy Gold Award: Best of Website - biltmore.com</a>
                </li>
                <li>
                  <a href="https://scribblesc.com/" target="_blank" rel="noreferrer">2020 Addy Silver Award - scribblesc.com</a>
                </li>
                <li>
                  <a href="https://www.aafknoxville.com/wp-content/uploads/2020/03/KNS_Winners_Ad_FORPRINT.pdf" target="_blank" rel="noreferrer">2020 ADDY Award Winner List</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ResumePage
