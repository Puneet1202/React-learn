import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(pre=> pre + 1)
  }

  function decreaseNum() {
    setNum(pre=> pre - 1)
  }

  function resetNum() {
    setNum(0)
  } 

  return (
    <div>
     
      <div className='w-20 h-10 bg-gray-800 ml-40 flex  justify-center items-center text-2xl mb-10 mt-20'>{num}</div>
      <button onClick={increaseNum } className='w-20 h-10 bg-black text-white ml-10'>increase</button>
      <button onClick={decreaseNum} className='w-20 h-10 bg-black text-white ml-10'>decrease</button>
      <button onClick={resetNum} className='w-20 h-10 bg-black text-white ml-10'>reset</button>
    </div>
  )
}

export default App