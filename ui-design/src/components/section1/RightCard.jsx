import React from 'react'
import'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 rounded-4xl overflow-hidden relative flex shrink-0'>
        <img 
        src={props.img} 
        alt=" " 

        className='h-full  w-full object-cover'
        />
       <RightCardContent tag={props.tag} id={props.id} color={props.color} />  
         
        
    </div>
  )
}
export default RightCard