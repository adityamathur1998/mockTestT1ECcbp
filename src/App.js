import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import RegisterContext from './Context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ART_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
    console.log(topic)
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
