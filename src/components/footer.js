import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


const Footer = ({ siteTitle }) => (
  <footer>
    <ul>
      <li>
        <a href="https://github.com/sethharris4989/portfolio" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/seth-harris-40787154/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
    </ul>
  </footer>
)



export default Footer