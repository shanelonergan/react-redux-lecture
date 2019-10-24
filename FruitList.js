import React from 'react' 
import { connect } from 'react-redux'

class FruitList extends React.Component {

  render(){
    return <ul>
      {this.props.fruitList.map(fruit => <li>{fruit}</li>)}
    </ul>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    fruitList: state.fruits
  }
}

const wrapWithConnect = connect(mapStateToProps)
const ReduxFruitList = wrapWithConnect(FruitList)

export default ReduxFruitList