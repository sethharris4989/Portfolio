/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const Layout = require("./src/components/layout").default
const Scene = require("./src/components/scene").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>
        {element}
      </Layout>
      <Scene />
    </>
  )
}