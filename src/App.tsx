import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor (props: Readonly<{}>) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log('Success!')
  }
  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Login
        </button>
      </div>
    )
  }
}
export default App