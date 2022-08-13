// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribeStatus = () => {
    this.setState(currentState => ({
      isSubscribed: !currentState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state
    let text = 'Subscribe'
    if (isSubscribed) {
      text = 'Subscribed'
    } else {
      text = 'Subscribe'
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <h2 className="sub-heading">Thank you! Happy Learning</h2>
        <button className="button" onClick={this.subscribeStatus}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
