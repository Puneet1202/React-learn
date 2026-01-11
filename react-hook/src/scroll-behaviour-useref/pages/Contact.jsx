import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>

        <form>
            <input type="text" placeholder='Name' className='border-2 m-2 p-2'/>
            <br/>
            <input type="email" placeholder='Email' className='border-2 m-2 p-2'/>
            <br/>
            <textarea placeholder='Message' className='border-2 m-2 p-2'></textarea>
            <br/>
            <button type="submit" className='bg-blue-500 text-white p-2 m-2 rounded'>Submit</button>
        </form>

    </div>
  )
}

export default Contact