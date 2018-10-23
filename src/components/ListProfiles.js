import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Card from "./ProfileHeader"



class ListProfiles extends Component{

render() {
  console.log(this.props.data)
  return (
    <div>
    {
      this.props.data && this.props.data.map(character => 
        <Link to={`/details/${character.id}`}> 
          <Card data={character} />
        </Link>
      )
    }
    </div>)
  }
}


export default ListProfiles