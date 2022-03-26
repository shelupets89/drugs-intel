import React, { useState } from 'react'


// Components
import Header from './components/Header'

// Reusable elements
import ButtonCustom from './elements/ButtonCustom/ButtonCustom'
import InputCustom from './elements/InputCustom/InputCustom'
import AvatarCustom from './elements/AvatarCustom/AvatarCustom'
import { bgcolor } from '@mui/system'
import { blue, blueGrey, grey, yellow } from '@mui/material/colors'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)

  const inputsData = isLogin
    ? [{ label: 'Email' }, { label: 'Password' }]
    : [{ label: 'Email' }, { label: 'Login' }, { label: 'Password' }]

  const buttonsData = [
    { variant: 'contained', tite: 'Login', onClick: () => setIsLogin(true) },
    {
      variant: 'outlined',
      tite: 'Create Account',
      onClick: () => setIsLogin(false),
    },

   
  ]
  const avatarData =[
    {sx: [500] , tite: 'G',onClick: () => setIsLogin(false), },
    {sx: {}, tite: 'f',onClick: () => setIsLogin(false), },
    {sx: {}, tite: 'TW',onClick: () => setIsLogin(false), },


  ]

  return (
    <div>
      <Header />

      <main
        style={{
          display: 'flex',
          padding: '30px',
        }}
      >
        <div style={{ display: 'flex', width: '50%' }} className='leftSide'>
          Some image
        </div>

        <div
          style={{ display: 'flex', width: '50%', flexDirection: 'column' }}
          className='rightSide'
        >
          <h3>Welcome Back</h3>
          <div className='msgBox'>msg box</div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                marginBottom: '20px',
              }}
            >
              {inputsData.map((input, index) => (
                <InputCustom key={index} label={input.label} />
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {buttonsData.map((button, index) => (
                <ButtonCustom
                  key={index}
                  variant={button.variant}
                  tite={button.tite}
                  onClick={button.onClick}
                />
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
              {avatarData.map((avatar, index) => (
                <AvatarCustom
                key={index}
                sx={avatar.sx}
                tite={avatar.tite}
                onClick={avatar.onClick}/>

              ))}
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
