import React from "react"
import CharHeader from "./ProfileHeader"



export default class Card extends React.Component {

  render() {
    const data = this.props.data || []
    const charData = data.find((element, index )=> Number(element.id) === Number(this.props.match.params.id) )
    return (
    <article className="card-block">
      <CharHeader data={charData}/>
      <div className="card-body">
        <p>{charData.description}</p>
        <div className="infos">
          <h2>Series</h2>
          {charData.series.items.map(
            item => (
              <h3>
                {item.name}
              </h3>
            ))
          }
        </div>      
      </div>
  </article>
    )
  }
}