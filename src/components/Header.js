import React from 'react'

const marvelLogo = require("../Marvel_Comics_logo.png")

const marvelHeader = () => (
  <header className="marvel-header">
    <a href="/" style={{"backgroundColor":"#d8232a"}}><img className="marvel-logo" src={marvelLogo} alt="Marvel logo"/></a>
  </header>
)

export default marvelHeader