import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="lg-home-img"
        />
      </div>
    )
  }
}

export default Home
