import React from 'react'
import TextField from '@mui/material/TextField'

import { InputWrapper } from './InputCustom.style'

const InputCustom = ({ label }) => {
  return (
    <InputWrapper>
      <TextField id='outlined-basic' label={label} variant='outlined' />
    </InputWrapper>
  )
}

export default InputCustom
