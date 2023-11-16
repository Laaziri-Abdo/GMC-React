import React, { Component } from 'react'
export default class count extends Component {
 state= {
    title:"GMC",
 };
 componentDidMount(){
    document.title=this.state.title;
 }
 componentDidUpdate(){
    document.title=this.state.title;
 }
  render() {
    return (
      <div><button onClick={()=> this.setState({title:"hiiiiiiii"})}>change title</button></div>
    )
  }
}
