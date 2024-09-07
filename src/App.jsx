import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './navigation/navbar'
import HoverButton from './navigation/hoverbar'


function App() {
  return (
    <>
      <div className='text-2xl'>
        <HoverButton />
      </div>
    </>
  )
}

export default App
