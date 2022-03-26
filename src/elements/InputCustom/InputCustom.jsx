import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

import { InputWrapper } from './InputCustom.style'

const InputCustom = ({ label }) => {
  const [value, setValue] = useState('')

  //TODO - validation
  return (
    <InputWrapper>
      <TextField
        value={value}
        onChange={e => {
          console.log(e.target.value)
          setValue(e.target.value)
        }}
        required
        id='outlined-basic'
        label={label}
        variant='outlined'
      />
    </InputWrapper>
  )
}

export default InputCustom
