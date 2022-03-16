import React from 'react'
import Button from '@mui/material/Button'

const ButtonCustom = ({ variant, tite }) => {
  return (
    <Button variant={variant} size='medium'>
      {tite}
    </Button>
  )
}

export default ButtonCustom
