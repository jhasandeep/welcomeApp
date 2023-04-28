// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {subscribe: 'subscribe'}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.subscribe === 'subscribe'
        ? {subscribe: 'subscribed'}
        : {subscribe: 'subscribe'},
    )
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="count">Welcome</h1>
          <p>Thank you! Happy Learning</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            {subscribe}
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
