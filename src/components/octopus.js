import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ImageCover,
  BigSpan,
} from "./index.styled"

import Img from "gatsby-image"

function MatesCard({ theme }) {
  const data = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "Tochi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "Eric.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "Tolanibaj.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const array = [
    {
      name: "Tochi",
      image: data.image1.childImageSharp.fluid,
      cont: "Exiter 1",
    },
    {
      name: "Eric",
      image: data.image2.childImageSharp.fluid,
      cont: "Exiter 2",
    },
    {
      name: "Tolanibaj",
      image: data.image3.childImageSharp.fluid,
      cont: "Exiter 3",
    },
  ]

  return (
    <>
      {array.map(each => (
        <ImageCover theme={theme}>
          <div>
            <div>
              <BigSpan theme={theme}>{each.name}</BigSpan>
            </div>
            <Img fluid={each.image} />
            <div style={{color: '#771304', backgroundColor: "#fff", width: '60%', borderBottomLeftRadius: '3px'}}>{each.cont}</div>
          </div>
        </ImageCover>
      ))}
    </>
  )
}

export default MatesCard
