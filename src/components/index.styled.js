import styled from 'styled-components'

export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 0.3em;
`
export const StyledFlexRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
div{
    margin: 0 0.75em;
}
`

export const StyledHookFlex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-top: 1px solid purple;
border-bottom: 1px solid purple;
`

export const StyledArticle = styled.article`
display: flex;
align-items: center;
justify-content: space-between;
`

export const EnterLeftWrapper = styled.article`
display: flex;
justify-content: space-between;
`

export const LateralColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
`

export const LateralColumnFlexEnd = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  align-items: flex-end;
`

export const LogoSpan = styled.span`
  color: #098765;
 font-size: 1.6em;
 @media (max-width: 768px) {
  font-size: 1.2em;
}
`


export const GridContainer = styled.div`
height: 12rem;
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 0.5em;
grid-template-areas: "cellOne cellTwo cellThree"
                     "cellOne cellTwo cellThree"
                     "cellOne cellFour cellFive"
`

export const GridCellOne = styled.div`
color: red;
background-color: #125689;
grid-area: cellOne;
`
export const GridCellTwo = styled.div`
color: white;
background-color: #018090;
grid-area: cellTwo;
`
export const GridCellThree = styled.div`
color: white;
background-color: #018090;
grid-area: cellThree;
`
export const GridCellFour = styled.div`
color: white;
background-color: #018090;
grid-area: cellFour;
`

export const GridCellFive = styled.div`
color: white;
background-color: #018090;
grid-area: cellFive;
`


export const MatesCardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
// border: 2px solid red;
`

export const ImageCover = styled.div`
width: 10rem;  
border: 0.6px solid ${({theme}) => theme.imgBorder}; 
margin: 0.2em; 
border-radius: 0.5em;
box-shadow: 2px 2.4px 2px ${({theme}) => theme.shadow};
@media (max-width: 768px) {
    width: 8.5rem;
  }
@media (max-width: 468px) {
    width: 6.57rem;
  }
`

export const Entered = styled.span`
  color: ${({theme})=>theme.entered}
`

export const Left = styled.span`
  color: ${({theme})=>theme.left}
`

export const LilSpan = styled.span`
  color: #555555;
`

export const BigSpan = styled.span`
  font-weight: ${({theme})=>theme.spanweight};
`
