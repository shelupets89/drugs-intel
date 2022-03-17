import React from 'react'
import Button from '@mui/material/Button'

const ButtonCustom = ({ variant, tite, onClick }) => {
  return (
    <Button variant={variant} size='medium' onClick={onClick}>
      {tite}
    </Button>
  )
}

export default ButtonCustom
