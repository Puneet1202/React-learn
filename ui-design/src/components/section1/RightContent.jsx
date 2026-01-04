import React from 'react'
import'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='  h-full w-2/3 p-4 overflow-x-auto flex flex-nowrap justify-between gap-4'>
     {props.user.map((elem,index)=>{
      return <RightCard key={index} id={index} img={elem.img} tag={elem.tag}  color={elem.color}/>
     })}
     
    
    </div>
  )
}

export default RightContent