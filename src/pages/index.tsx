import React from "react"
import { Hero, Featured } from "../components"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const featuredData = useStaticQuery(graphql`
    query {
      featuredJson {
        layouts {
          title
          link
          numOfComponents
          image {
            alt
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        components {
          title
          link
          numOfComponents
          image {
            alt
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const { components, layouts } = featuredData.featuredJson
  console.log(components)
  return (
    <>
      <Hero />
      <Featured title="Layouts" data={layouts} link="/layouts" />
      <Featured title="Components" data={components} link="/components" />
    </>
  )
}

export default IndexPage
