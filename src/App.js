import React from 'react';
import './App.css';
import {MemePicker} from './components/meme-picker/meme-picker.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      random: 'something',
      memes: [],
    }
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => this.setState({memes: data.data.memes}))
  }

  render() {

    return(
      <div className='App'>
  <h1>Meme Generator</h1>
  
    <MemePicker memes={this.state.memes} />

      

      </div>
    )
  }
}

export default App;