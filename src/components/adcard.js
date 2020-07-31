import React from "react"

import {
  GridContainer,
  GridCellOne,
  GridCellTwo,
  GridCellThree,
  GridCellFour,
  GridCellFive,
} from "./index.styled"

const AdcardOne = () => {
  return (<GridCellOne>ad space is available</GridCellOne>)
}

const AdcardTwo = () => {
  return (
    <GridCellTwo>ad space is available</GridCellTwo>
  )
}
const AdcardThree = () => {
  return (
    <GridCellThree >
      ad space is available
    </GridCellThree>
  )
}
const AdcardFour = () => {
  return (<GridCellFour>ad space is available</GridCellFour>)
}

const AdcardFive = () => {
  return (<GridCellFive>ad space is available</GridCellFive>)
}

export default function Adcard() {
  return (
    <GridContainer>
      <AdcardOne />
      <AdcardTwo />
      <AdcardThree />
      <AdcardFour />
      <AdcardFive />
    </GridContainer>
  )
}
