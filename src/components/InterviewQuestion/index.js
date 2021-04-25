// Write you Code here
import {Component} from 'react'
import './index.css'

class InterviewQuestion extends Component {
  state = {show: []}

  upArrow = 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'

  downArrow = 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

  addOrRemoveAnswer = uid => {
    this.setState(prev => {
      const {show} = prev
      const newState = show.some(i => i === uid)
        ? show.filter(i => i !== uid)
        : show.concat(uid)
      return {show: newState}
    })
  }

  showHide = id => {
    const {show} = this.state
    return show.some(i => i === id)
  }

  render() {
    const {language, level, questionsData} = this.props
    return (
      <div className="questions-container">
        {questionsData.map(item =>
          (item.language === language || language === 'ALL') &&
          (item.difficultyLevel === level || level === 'ALL') ? (
            <div key={item.id} className="q-card">
              <div className="bubbles-container">
                <p className={`bubble ${item.difficultyLevel}`}>
                  {item.difficultyLevel}
                </p>
                <p className={`bubble ${item.language}`}>{item.language}</p>
              </div>
              <h1 className="question">{item.questionText}</h1>
              <button
                className="hide-show"
                type="button"
                onClick={() => this.addOrRemoveAnswer(item.id)}
              >
                Show
                <img
                  src={this.showHide(item.id) ? this.upArrow : this.downArrow}
                  className="arrow"
                  alt="arrow"
                />
              </button>
              {this.showHide(item.id) ? (
                <p className="answer">{item.answerText}</p>
              ) : null}
            </div>
          ) : null,
        )}
      </div>
    )
  }
}

export default InterviewQuestion
