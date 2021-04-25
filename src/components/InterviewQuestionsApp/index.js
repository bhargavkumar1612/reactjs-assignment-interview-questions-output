// Write you Code here
import {Component} from 'react'
import './index.css'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends Component {
  state = {language: 'ALL', level: 'ALL'}

  setLanguage = lang => {
    this.setState({language: lang})
  }

  setLevel = lev => {
    this.setState({level: lev})
  }

  render() {
    const {questionsData, levelsData, languageData} = this.props
    const {language, level} = this.state
    return (
      <div className="bg-container">
        <div className="banner">
          <h1 className="banner-heading">30 seconds of Interviews</h1>
          <img
            className="banner-image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="img"
          />
        </div>
        <Filters
          levelsData={levelsData}
          languageData={languageData}
          setLanguage={this.setLanguage}
          setLevel={this.setLevel}
        />
        <InterviewQuestion
          questionsData={questionsData}
          language={language}
          level={level}
        />
      </div>
    )
  }
}

export default InterviewQuestionsApp
