import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ImageCover,
  EnterLeftWrapper,
  LateralColumn,
  LateralColumnFlexEnd,
  LilSpan,
  BigSpan,
  Entered,
  Left,
} from "./index.styled"

import Img from "gatsby-image"

function MatesCard({ theme }) {
  const data = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "Erica.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "Eric.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "Dorathy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "Brighto.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "Ka3na.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image6: file(relativePath: { eq: "Kaisha.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image7: file(relativePath: { eq: "Kiddwaya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image8: file(relativePath: { eq: "Laycon.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image9: file(relativePath: { eq: "Lilo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image10: file(relativePath: { eq: "Lucy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image11: file(relativePath: { eq: "Nengi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190, toFormat: PNG) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image12: file(relativePath: { eq: "Neo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image13: file(relativePath: { eq: "Ozo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image14: file(relativePath: { eq: "Praise.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image15: file(relativePath: { eq: "Prince.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image16: file(relativePath: { eq: "Tochi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image17: file(relativePath: { eq: "Tolanibaj.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image18: file(relativePath: { eq: "TrickyTee.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image19: file(relativePath: { eq: "Vee.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }

        image20: file(relativePath: { eq: "Wathoni.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 190, maxHeight: 190) {
              tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const array = [
    {
      name: "Erica",
      image: data.image1.childImageSharp.fluid,
    },
    {
      name: "Eric",
      image: data.image2.childImageSharp.fluid,
    },
    {
      name: "Dorathy",
      image: data.image3.childImageSharp.fluid,
    },
    {
      name: "Brighto",
      image: data.image4.childImageSharp.fluid,
    },
    {
      name: "Ka3na",
      image: data.image5.childImageSharp.fluid,
      left: "02.08",
    },
    {
      name: "Kaisha",
      image: data.image6.childImageSharp.fluid,
    },
    {
      name: "Kiddwaya",
      image: data.image7.childImageSharp.fluid,
    },
    {
      name: "Laycon",
      image: data.image8.childImageSharp.fluid,
    },
    {
      name: "Lilo",
      image: data.image9.childImageSharp.fluid,
      left: "02.08"
    },
    {
      name: "Lucy",
      image: data.image10.childImageSharp.fluid,
    },
    {
      name: "Nengi",
      image: data.image11.childImageSharp.fluid,
    },
    {
      name: "Neo",
      image: data.image12.childImageSharp.fluid,
    },
    {
      name: "Ozo",
      image: data.image13.childImageSharp.fluid,
    },
    {
      name: "Praise",
      image: data.image14.childImageSharp.fluid,
    },
    {
      name: "Prince",
      image: data.image15.childImageSharp.fluid,
    },
    {
      name: "Tochi",
      image: data.image16.childImageSharp.fluid,
    },
    {
      name: "Tolanibaj",
      image: data.image17.childImageSharp.fluid,
    },
    {
      name: "TrickyTee",
      image: data.image18.childImageSharp.fluid,
    },
    {
      name: "Vee",
      image: data.image19.childImageSharp.fluid,
    },
    {
      name: "Wathoni",
      image: data.image20.childImageSharp.fluid,
    },
  ]

  return (
    <>
      {array.map(each => (
        <ImageCover theme={theme}>
          <div>
            <div>
              <BigSpan theme={theme}>{each.name}</BigSpan>
              <span>{each.left ? <span style={{color: 'red'}}>&times;</span> : ``}</span>
            </div>
            <Img fluid={each.image} />
            <EnterLeftWrapper>
              <LateralColumn>
                <Entered theme={theme}>In</Entered>
                <LilSpan>19.07</LilSpan>
              </LateralColumn>
              <LateralColumnFlexEnd>
                <Left theme={theme}>Out</Left>
               <LilSpan>{each.left ? each.left : `?`}</LilSpan>
              </LateralColumnFlexEnd>
            </EnterLeftWrapper>
          </div>
        </ImageCover>
      ))}
    </>
  )
}

export default MatesCard
