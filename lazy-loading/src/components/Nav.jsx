import React from 'react'

const Nav = () => {
  return (
    <main>
           <nav className=' Nagivation bg-amber-200 flex justify-between p-4 '>
                <ul className=' flex   justify-evenly gap-4  w-full text-2xl'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
    </main>
    )
}  

export default Nav