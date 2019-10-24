import React from 'react' 

class FruitList extends React.Component {

  render(){
    return <ul>
      {this.props.fruitList.map(fruit => <li>{fruit}</li>)}
    </ul>
  }

}

export default FruitList