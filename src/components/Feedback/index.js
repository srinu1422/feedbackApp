// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isButtonClicked: false}

  onclickEmoji = () => this.setState({isButtonClicked: true})

  rendorFeedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onclickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <b /> <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  rendorThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text"> Thank You ! </h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  rendor() {
    const {isButtonClicked} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isButtonClicked
            ? this.rendorFeedbackScreen()
            : this.rendorThankYouScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
