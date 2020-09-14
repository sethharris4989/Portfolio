import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header>
      <Link class="title-link" to="/">
        <svg width="70px" class="logo" viewBox="0 0 242 237" >
          <title>Page 1</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group" transform="translate(2.000000, 2.000000)" fill="#141414" opacity="0.89999998" stroke-linejoin="bevel" stroke-width="4">
              <g id="g24297">
                <g id="g17741" transform="translate(0.540756, 0.353004)" opacity="0.49999997" stroke="#2A2A2A">
                  <polygon id="path6765" points="0.709909425 99.1578895 47.6057383 36.3588421 89.6771662 68.8923108 76.6699409 140.267956 24.1456317 165.287759"></polygon>
                  <polygon id="path7493" points="89.6771662 69.0343135 162.989484 60.3400657 193.779576 128.076522 138.98521 177.077543 76.6699409 140.409959"></polygon>
                  <polygon id="path7495" points="47.6057383 36.3588421 102.164612 0.352556038 180.017055 19.1123554 162.989484 60.3400657 89.8193056 69.0343135"></polygon>
                  <polygon id="path7497" points="180.017047 19.1123554 231.026592 72.365132 236.537319 144.426434 193.779576 128.076522 162.989492 60.4577108"></polygon>
                  <polygon id="path7499" points="24.2877718 165.287759 59.2647223 227.023852 136.313099 231.299975 138.985202 177.077543 76.5034125 140.409959"></polygon>
                  <polygon id="path7501" points="193.755179 128.076522 236.537319 144.402068 199.525804 215.919724 136.170968 231.299975 138.985202 177.1019"></polygon>
                </g>
                <g id="g24289" transform="translate(0.909699, 0.113603)" opacity="0.60000002" stroke="#777777">
                  <polygon id="path8253" points="101.679618 0.228229464 46.7187107 36.9445373 0.20052495 99.6015756 20.3022223 114.344901 92.9282303 44.5514791"></polygon>
                  <polygon id="path8255" points="101.67961 0.418961833 179.6742 19.5804111 230.565986 72.5735438 183.008221 96.4127599 93.0459886 44.3161992"></polygon>
                  <polygon id="path8257" points="0.107159699 99.4595808 20.3022223 114.344901 62.2315157 205.376928 58.7553386 226.948258 23.11646 164.952509"></polygon>
                  <polygon id="path8259" points="62.2315157 205.376928 161.960313 197.084322 199.540394 216.10377 135.803723 231.885672 58.7797356 226.923901"></polygon>
                  <polygon id="path8261" points="182.748324 96.5547626 230.683737 72.5491861 236.052324 144.987773 199.609366 215.93741 162.12685 197.084322"></polygon>
                  <polygon id="path8263" points="93.212509 44.2918352 182.91486 96.2707571 162.078072 196.94232 62.373655 205.401285 20.3022223 114.393632"></polygon>
                </g>
              </g>
            </g>
            <path d="M82.58,164.04 C103.64,164.04 113.52,152.6 113.52,137.91 C113.52,122.05 105.07,115.03 86.35,110.35 C74.39,107.36 68.67,104.24 68.67,97.22 C68.67,91.11 73.09,87.34 81.28,87.34 C90.38,87.34 95.06,90.33 98.96,96.44 L112.61,86.69 C106.24,76.81 95.45,72 81.15,72 C59.83,72 50.47,83.05 50.47,97.22 C50.47,112.04 59.31,120.49 76.99,125.17 C91.55,128.94 95.32,132.45 95.32,138.69 C95.32,144.15 91.81,148.7 81.41,148.7 C72.18,148.7 66.72,145.71 61.91,139.73 L48,149.35 C55.93,159.75 66.85,164.04 82.58,164.04 Z M145.24,162.87 L145.24,124.13 L176.31,124.13 L176.31,162.87 L194.51,162.87 L194.51,73.17 L176.31,73.17 L176.31,108.79 L145.24,108.79 L145.24,73.17 L127.04,73.17 L127.04,162.87 L145.24,162.87 Z" id="SH" fill="#FFFFFF" fill-rule="nonzero"></path>
          </g>
        </svg>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
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

      <FontAwesomeIcon className="mmIcon" icon={faBars} onClick={() => setNavbarOpen(!navbarOpen)} />

      {navbarOpen ? (
        <section className="mobile-menu">
          <ul className="mobilenav-links">
            <li>
              <Link className="m-link" to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Home</Link>
            </li>
            <li>
              <Link className="m-link" to="/resume" onClick={() => setNavbarOpen(!navbarOpen)}>Resume</Link>
            </li>
            <li>
              <Link className="m-link" to="/projects" onClick={() => setNavbarOpen(!navbarOpen)}>Projects</Link>
            </li>
            <li>
              <Link className="m-link" to="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>Contact</Link>
            </li>
            <li>
              <a href="https://github.com/sethharris4989/portfolio" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/seth-harris-40787154/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </section>
      ) : (null)}

    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
