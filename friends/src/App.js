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
    .get(' http://localhost:5000/friends')
    .then(response => {
      console.log(response)
    }

    .catch(err => {
      console.log(err);
    }
   
    this.setState = {
      friends: res
    }
}


  render() {
    return (
      <div className="App">
        <Frienlist  friends={friends}/>
      </div>
    );
  }
}

export default App;
