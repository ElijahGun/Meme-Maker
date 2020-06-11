import React from "react";
import "./App.css";
import { MemePicker } from "./components/meme-picker/meme-picker.component";
import { MemeContainer } from "./components/meme-container/meme-container.component";
import {TextBox} from './components/text-box/text-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMeme: "https://i.imgflip.com/9sw43.jpg",
      memes: [],
      textBoxes: [
        
      ],
      text: 'hello world',
      offsetTop: 0,
      offsetBottom: 0,
      offsetLeft: 0,
      offsetRight: 0,
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => this.setState({ memes: data.data.memes }));
  }

  handleClick = (e) => this.setState({ currentMeme: e.target.currentSrc });
  handleChange = e => this.setState({text: e.target.value});

  handleDown = e => this.setState((state) => ({offsetTop: state.offsetTop += 2.5}))
  handleUp = e => this.setState((state) => ({offsetBottom: state.offsetBottom += 2.5}))
  handleRight = e => this.setState((state) => ({offsetRight: state.offsetRight += 2.5}))
  handleLeft = e => this.setState((state) => ({offsetLeft: state.offsetLeft += 2.5}))

  render() {
    return (
      <div className="App">
        <h1>Meme Generator</h1>
        <div className="main-container">
          <MemePicker memes={this.state.memes} handleClick={this.handleClick} />
          <MemeContainer meme={this.state.currentMeme} text={this.state.text} offSetTop={this.state.offsetTop}/>
        </div>

        <TextBox handleChange={this.handleChange} handleDown={this.handleDown} handleUp={this.handleUp} handleLeft={this.handleLeft} handleRight={this.handleRight} />


      </div>
    );
  }
}

export default App;
