import React from 'react'

const RightCardContent = (prop) => {
    console.log(prop.color);
    
  return (
    <div>
         <div className='absolute top-0 left-0 bg-opacity-50 text-white p-6 h-full w-full flex flex-col justify-between'>
            <h2 className ='bg-white rounded-full h-10 w-10 flex justify-center item-center  text-2xl font-bold  text-black'>{prop.id+1}</h2>
            <div>
               
                <p className='text-base leading-relaxed'>
                Utilize advanced analytics to categorize prospective customers based on demographics, behavior, and preferences, enabling targeted marketing strategies.
                </p> 
                <div  className='flex justify-center gap-5 items-center'>
                    <button style={{backgroundColor: prop.color}} className='mt-4 text-black px-8  py-2 rounded-full uppercase tracking-wide'>{prop.tag}</button>
                    <button>
                        <i style={{backgroundColor: prop.color}} className="ri-arrow-right-line text-2xl   px-3 py-2 rounded-full " ></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RightCardContent