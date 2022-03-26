import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'

import { InputWrapper } from '../InputCustom/InputCustom.style'
import axios from 'axios'

const InputForm = ({ isLogin }) => {
  const [userNameValue, setUserNameValue] = useState('')
  const [userEmail, setUserEmail] = useState('') // Valid
  const [userPassword, setUserPassword] = useState('') // Comp
  const [userConfPassword, setUserConfPassword] = useState('') //comp

  const signUp = () => {
    //After validation

    axios.post('http://localhost:8080/accounting/registation')

    fetch('http://localhost:8080/accounting/registation', {
      method: 'POST',
      body: {
        username: userNameValue,
        email: userEmail,
        password: userPassword,
      },
      'Content-Type': 'Appliocation/JSON',
    })
      .then(res => JSON.parse(res))
      .then(data => {
        // true or false
        console.log(data)

        if (data.status === 200) {
          //dispatch action
          // save token in redux and localStorage
        }

        if (data.status === 409) {
          // say to user exists
        }
      })
      .catch(e => console.log(e))
  }

  //   const http://localhost:8080/accounting/login
  return (
    <>
      {/* userName */}
      {!isLogin && (
        <InputWrapper>
          <TextField
            value={userNameValue}
            onChange={e => {
              console.log(e.target.value)
              setUserNameValue(e.target.value)
            }}
            required
            id='outlined-basic'
            label={'Username'}
            variant='outlined'
          />
        </InputWrapper>
      )}
      {/* email */}
      <InputWrapper>
        <TextField
          value={userEmail}
          onChange={e => {
            console.log(e.target.value)
            setUserEmail(e.target.value)
          }}
          required
          id='outlined-basic'
          label={'Email'}
          variant='outlined'
        />
      </InputWrapper>

      {/* password */}
      <InputWrapper>
        <TextField
          value={userPassword}
          onChange={e => {
            console.log(e.target.value)
            setUserPassword(e.target.value)
          }}
          required
          id='outlined-basic'
          label={'Password'}
          variant='outlined'
          type={'password'}
        />
      </InputWrapper>

      {/* password */}
      {isLogin || (
        <InputWrapper>
          <TextField
            value={userConfPassword}
            onChange={e => {
              console.log(userPassword === userConfPassword)
              setUserConfPassword(e.target.value)
            }}
            required
            id='outlined-basic'
            label={'Confirm password'}
            variant='outlined'
          />
        </InputWrapper>
      )}
    </>
  )
}

export default InputForm
