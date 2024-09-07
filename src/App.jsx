import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './navigation/navbar'
import HoverButton from './navigation/hoverbar'
import InteractiveBars from './navigation/navbar'

function App() {
  return (
    <>
    {/* <div className="flex flex-col justify-center items-start h-screen">
      <div className="flex flex-col items-start space-y-2">
        <HoverButton word="Home" />
        <HoverButton word="Aboutme" />
        <HoverButton word="Projects" />
        <HoverButton word="Stack" />
        <HoverButton word="AskLlama" />
      </div>
    </div> */}

      <InteractiveBars />

    </>
  )
}

export default App
