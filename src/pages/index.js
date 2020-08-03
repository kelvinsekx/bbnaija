import React from "react"
import { Link, graphql } from "gatsby"

import Emoji from "../icons/emoji.svg"

import { InHouseIconWrapper } from "../components/toggle.styled"

import Layout from "../components/layout"
import TwitterHook from "../components/twitterhook"
import Adcard from "../components/adcard"
import MatesCard from "../components/matescard"

import { StyledArticle, MatesCardWrapper } from "../components/index.styled"
import SEO from "../components/seo"

const BlogIndex = ({ data, location, theme }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome..." />

      <div>
        <InHouseIconWrapper>
          <span>In-House</span>{" "}
          <span>
            <Emoji style={{ width: "4em", height: "auto" }} />
          </span>
        </InHouseIconWrapper>
        <MatesCardWrapper>
          <MatesCard theme={theme} />
        </MatesCardWrapper>
      </div>

      <div style={{ margin: "2em 0" }}>
        <p>Bill Board</p>
        <Adcard />
      </div>

      <div>
        <h2>Latest Gists</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <StyledArticle key={node.fields.slug}>
              <div>
                <img
                  src={node.frontmatter.hero.childImageSharp.fluid.src}
                  alt="jhgkh"
                  width="100"
                  height="100"
                />
              </div>

              <div>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </div>
            </StyledArticle>
          )
        })}
      </div>
      <TwitterHook />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            hero {
              absolutePath
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
