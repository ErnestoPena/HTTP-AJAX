import React from 'react';
import './App.css';
import axios from 'axios';
import Frienlist from './components/friendlist';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

componentDidMount() {
  
  axios
    .get('http://localhost:5000/friends')

    .then(res => {
      
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
   
    
}


  render() {
    return (

      <div className="App">
        {this.state.friends.map(mylist => (
           <Frienlist  key={mylist.id} mylist={mylist}/>
          
        ))}
        
      </div>
    );
  }
}

export default App;
