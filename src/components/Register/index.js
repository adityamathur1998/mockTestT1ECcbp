import Header from '../Header'

import RegisterContext from '../../Context/RegisterContext'

import {
  RegisterPageContainer,
  ContentContainer,
  WebsiteRegisterImage,
  RightLabelContainer,
  JoinHeadingText,
  RegisterFormContainer,
  LabelText,
  UsernameInput,
  SelectTopicContainer,
  OptionItem,
  RegisterNowButton,
  ErrorText,
} from './styledComponent'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        showError,
        registerName,
        changeTopic,
        changeName,
        updateError,
      } = value

      const submitForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.vale)
      }

      return (
        <div>
          <Header />
          <RegisterPageContainer>
            <ContentContainer>
              <WebsiteRegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RightLabelContainer>
                <RegisterFormContainer onSubmit={submitForm}>
                  <JoinHeadingText>Let us join</JoinHeadingText>
                  <LabelText htmlFor="name">Name</LabelText>
                  <UsernameInput
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Your name"
                    onChange={onChangeName}
                  />
                  <LabelText htmlFor="topic">Topics</LabelText>
                  <SelectTopicContainer
                    id="topic"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(eachTopic => (
                      <OptionItem value={eachTopic.id} key={eachTopic.id}>
                        {eachTopic.displayText}
                      </OptionItem>
                    ))}
                  </SelectTopicContainer>
                  <RegisterNowButton type="submit">
                    Register Now
                  </RegisterNowButton>
                  {showError && <ErrorText>Please enter your name</ErrorText>}
                </RegisterFormContainer>
              </RightLabelContainer>
            </ContentContainer>
          </RegisterPageContainer>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
