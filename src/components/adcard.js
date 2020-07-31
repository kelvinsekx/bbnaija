import React from "react"

import {
  GridContainer,
  GridCellOne,
  GridCellTwo,
  GridCellThree,
  GridCellFour,
} from "./index.styled"

const AdcardOne = () => {
  return (<GridCellOne>div-one</GridCellOne>)
}

const AdcardTwo = () => {
  return (
    <GridCellTwo>div-two</GridCellTwo>
  )
}
const AdcardThree = () => {
  return (
    <GridCellThree >
      div-two
    </GridCellThree>
  )
}
const AdcardFour = () => {
  return (<GridCellFour>div-two</GridCellFour>)
}

export default function Adcard() {
  return (
    <GridContainer>
      <AdcardOne />
      <AdcardTwo />
      <AdcardThree />
      <AdcardFour />
    </GridContainer>
  )
}
