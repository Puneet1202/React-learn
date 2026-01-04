import React from 'react'
import RightContent from '../section1/RightContent'
import LeftContent from '../section1/leftContent'

const Page1Content = (props) => {
  return (
    <div className='pb-10 pt-6 h-[90vh] flex item-center  px-18 gap-10'>
       <LeftContent/>
      <RightContent user={props.user} />
     

    </div>
  )
}

export default Page1Content