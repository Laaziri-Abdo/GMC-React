import React, { Component } from 'react'
export default class App extends Component {
  state = {
    person: {
      fullName: "achraf hakimi ",
      bio: "Lorema hi hi hi hi hi hi hi ",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/HakimiAchraf.jpg/800px-HakimiAchraf.jpg",
      profession: "kwairi"
    },
    shows: false,
  };
  handleClick = () => {
    this.setState({ shows: !this.state.shows })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Show Profile</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} />
            <p> {this.state.person.profession}</p>
          </div>
        )}
      </div>
    )
  }
}
