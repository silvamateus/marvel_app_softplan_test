import React from 'react'

const ProfileImage = props =>
  <img className="character-image" src={props.imgURL} alt={props.name + " image"}/>

const CharacterName = props => <h2 className="character-name">{props.name}</h2>

class HeaderCard extends React.Component{
  render() {
    const { data } = this.props
    return (
      <div className="card" key={data.id}>
        {data.thumbnail && <ProfileImage 
          imgURL={`${data.thumbnail.path}.${data.thumbnail.extension}`} 
          name={data.name}/>}
        <CharacterName name={data.name} />
      </div>
    )
  }

}

export default HeaderCard