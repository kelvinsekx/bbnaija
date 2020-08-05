import styled from "styled-components"


// Toggle.styled.js
export const ToggleContainer = styled.button`
background: ${({ theme }) => theme.gradient};
border: 1px solid ${({ theme }) => theme.toggleBorder};
border-radius: 30px;
cursor: pointer;
display: flex;
font-size: 0.5rem;
justify-content: space-between;
margin: 0 auto;
overflow: hidden;
padding: 0.1rem;
position: relative;
width: 2rem;
height: 2rem;

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:nth-child(3) {
      display: ${({ lightTheme }) =>
        lightTheme ? "block" : "none"};
    }

    // moon icon
    &:nth-child(2) {
      display: ${({ lightTheme }) =>
        lightTheme ? "none" : "block"};
    }
  }
`

export const InHouseIconWrapper = styled.div`
display: flex;
font-weight: bold;
margin: 5% 0;
align-items: center;
`
