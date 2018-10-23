import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Card from "./ProfileHeader"



class ListProfiles extends Component{

render() { 
  return (
    <div>
    {
      this.props.data && this.props.data.map(character => 
        <Link to={`/details/${character.id}`} key={character.id}> 
          <Card data={character} />
        </Link>
      )
    }
    </div>)
  }
}


export default ListProfiles