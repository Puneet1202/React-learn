import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { HeroText } from './HeroText'
import { Arrow } from './Arrow'

const LeftContent = () => {
  return (
    <div className=" h-full  w-full md:w-1/3 flex flex-col justify-between px-4 sm:px-6 py-6overflow-hidden text-black">
      <HeroText/>
      <Arrow/>
    </div>
  )
}

export default LeftContent
