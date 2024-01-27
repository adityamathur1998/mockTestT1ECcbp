import {Link} from 'react-router-dom'
import Header from '../Header'

import RegisterContext from '../../Context/RegisterContext'

import {
  FirstHomeContainer,
  HeadingText,
  NoteText,
  RegisterButton,
  MeetupImage,
} from './styledComponent'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value

      return (
        <div>
          <Header />
          {isRegistered === true ? (
            <FirstHomeContainer>
              <HeadingText>Hello {name}</HeadingText>
              <NoteText>Welcome to {topic}</NoteText>
              <MeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </FirstHomeContainer>
          ) : (
            <FirstHomeContainer>
              <HeadingText>Welcome to Meetup</HeadingText>
              <NoteText>Please register for the topic</NoteText>
              <Link to="/register">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <MeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </FirstHomeContainer>
          )}
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
