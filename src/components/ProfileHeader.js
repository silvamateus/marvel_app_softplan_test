import React from 'react'

const ProfileImage = props => (
  <img className="character-image" src={props.imgURL} alt={props.name + " image"}/>
)

const CharacterName = props => (
  <h2 className="character-name">{props.name}</h2>
)


const headerCard = props => (
  <div className="card">
    <ProfileImage imgURL="#" name="PAPAPA"/>
    <CharacterName name="PAPAPAP" />
  </div>
)

export default headerCard