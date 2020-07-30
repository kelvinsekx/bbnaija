import styled from 'styled-components'

export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const StyledFlexRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
div{
    margin: 0 0.6em;
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

export const GridContainer = styled.div`
display: grid;
grid-template-column: 100px 50px 50px 100px;

`