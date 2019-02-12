import React, { Component } from 'react';
import AddContact from './AddContact';
import List from './List';

// import AppBar from '@material-ui/core/AppBar';


class App extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    this.state = {
      List: [
        {
          name: 'Steven Fisher',
          email: 'steven@gmail.com',
          phone: '918-555-3310',
          address: '1234 Forrest Dr',
          city: 'Tulsa',
          state: 'Oklahoma',
          zipCode: '74014'
        }, 
        {
          name: 'Savannah Fisher',
          email: 'savannah@gmail.com',
          phone: '918-555-3311',
          address: '5678 Dog-Dog Dr',
          city: 'Tulsa',
          state: 'Oklahoma',
          zipCode: '74014'

        }
      ]
      }
    }
  

  render() {
    return (
      <div>
        <AddContact />
        <br />
        <List />
      </div>
    );
  }
}

export default App;
