// Write you Code here
import {Component} from 'react'
import './index.css'

class Filters extends Component {
  render() {
    const {levelsData, languageData, setLanguage, setLevel} = this.props
    return (
      <div className="filter-container">
        <div className="options-selector-container">
          <label htmlFor="language" className="options-heading">
            Language
          </label>
          <select
            id="language"
            className="select"
            onChange={event => setLanguage(event.target.value)}
          >
            {languageData.map(item => (
              <option className="option" key={item.id} value={item.language}>
                {item.language}
              </option>
            ))}
          </select>
        </div>
        <div className="options-selector-container">
          <label htmlFor="level" className="options-heading">
            Difficulty Level
          </label>
          <select
            className="select"
            id="level"
            onChange={event => setLevel(event.target.value)}
          >
            {levelsData.map(item => (
              <option className="option" key={item.id} value={item.level}>
                {item.level}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
