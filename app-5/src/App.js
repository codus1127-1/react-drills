import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  constructor(){
    super()
    this.state = {
      imgURL: 'https://cdnb.artstation.com/p/assets/images/images/009/446/313/large/sylvain-sarrailh-illenium.jpg?1519056202'
    }
  }
  render() {
    return (
      <div className="App">
        <Image
        img={this.state.imgURL}
        // or instead of setting state you could just pass the imgURL directly in the prop.
        //img={'https://cdnb.artstation.com/p/assets/images/images/009/446/313/large/sylvain-sarrailh-illenium.jpg?1519056202'}
        // either way works.
        />
      </div>
    );
  }
}

export default App;
