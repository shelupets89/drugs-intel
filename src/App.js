import React from 'react'

// Components
import Header from './components/Header'

// Reusable elements
import ButtonCustom from './elements/ButtonCustom/ButtonCustom'
import InputCustom from './elements/InputCustom/InputCustom'

const App = () => {
  const inputsData = [{ label: 'Email' }, { label: 'Password' }]
  const buttonsData = [
    { variant: 'contained', tite: 'Login' },
    { variant: 'Password', tite: 'Create Account' },
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
                />
              ))}
            </div>
          </div>

          <div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
