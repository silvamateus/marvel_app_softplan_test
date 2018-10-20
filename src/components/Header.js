import React from 'react'

const marvelLogo = require("../Marvel_Comics_logo.png")

const marvelHeader = () => (
  <header className="marvel-header">
    <img className="marvel-logo" src={marvelLogo} alt="Marvel logo"/>
  </header>
)

export default marvelHeader