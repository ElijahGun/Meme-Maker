import React from 'react';
import './App.css';
import {MemePicker} from './components/meme-picker/meme-picker.component';
import {MemeContainer} from './components/meme-container/meme-container.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMeme: 'https://i.imgflip.com/9sw43.jpg',
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
  <div className='main-container'>
      <MemePicker memes={this.state.memes} />  
      <MemeContainer meme={this.state.currentMeme}/>
  </div>
      </div>
    )
  }
}

export default App;