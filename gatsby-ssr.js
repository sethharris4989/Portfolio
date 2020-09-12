/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const Layout = require("./src/components/layout").default
const Scene = require("./src/components/scene").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>
        {element}
        <Scene />
      </Layout>
    </>
  )
}