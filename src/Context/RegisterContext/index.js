import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegistered: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  updateError: () => {},
})

export default RegisterContext
