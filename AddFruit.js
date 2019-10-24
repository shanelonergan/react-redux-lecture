import React from 'react'
import { connect } from 'react-redux'
import { addFruit } from './actionCreators'

class AddFruit extends React.component {
  
  render(){

    return <button onClick={ this.props.AddFruit }>Add Apples</button>

  }
}

const mapDispatchToProps = (props) => {

  console.log("mdtp")

  return {

    graham: true,
    kenny: false,
    AddFruit: () => {
      dispatch(addFruit("apple"))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(AddFruit)