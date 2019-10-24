import React from 'react' 
import { connect } from 'react-redux'

class FruitList extends React.Component {

  render(){
    return <ul>
      {this.props.fruitList.map(fruit => <li>{fruit}</li>)}
    </ul>
  }
}

const wrapWithConnect = connect()
const wrappedThing = wrapWithConnect(FruitList)

export default FruitList