import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 60vh;
`
export const WebsiteRegisterImage = styled.img`
  width: 400px;
`
export const RightLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 50px;
`
export const JoinHeadingText = styled.h1`
  font-family: 'Roboto';
  font-size: 37px;
  color: #475569;
`
export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const LabelText = styled.label`
  font-family: 'Roboto';
  color: #64748b;
  font-weight: bold;
  margin-bottom: 8px;
`
export const UsernameInput = styled.input`
  width: 300px;
  border: 1px solid #7b8794;
  outline: none;
  padding: 8px;
  color: #64748b;
  margin-bottom: 24px;
  border-radius: 4px;
`
export const SelectTopicContainer = styled.select`
  width: 300px;
  border: 1px solid #7b8794;
  outline: none;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 24px;
`
export const OptionItem = styled.option`
  font-family: 'Roboto';
  color: #334155;
`
export const RegisterNowButton = styled.button`
  align-self: flex-start;
  background-color: #2563eb;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 9px;
  padding-bottom: 9px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 7px;
  outline: none;
  border: none;
  cursor: pointer;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
`
