import React from "react"

import OctopusCard from "../components/octopus";
import {  MatesCardWrapper } from "../components/index.styled"

import Layout from "../components/layout"

function Octopus() {
  return (
    <Layout>
      <div>
        <h1>Octopus Pick</h1>
        <MatesCardWrapper>
          <OctopusCard />
        </MatesCardWrapper>
        <div>
            <h3>Your time is UP...</h3>
            <p>tHE sadness...leave our house</p>
        </div>
      </div>
    </Layout>
  )
}

export default Octopus;
