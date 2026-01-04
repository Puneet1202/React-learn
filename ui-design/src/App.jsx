import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'




const App = () => {
  
  
  const user=[
    {img:'https://images.unsplash.com/photo-1545912453-3d32e20f72bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:"#F59E0B",
      tag:'satisfied'
    },
    {img:'https://images.unsplash.com/photo-1702906109364-909ad77e3fe5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:"#10B981",
      tag:'underServed'
    },
    {img:'https://images.unsplash.com/photo-1660884437169-159250a8436f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:"#3B82F6",
      tag:' UnderBank'
    },
    
    {img:'https://plus.unsplash.com/premium_photo-1664351560745-a14ed7bfee3d?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:"#EF4444",
      tag:' Underthermed'
    },
    
  ]
  return (
    <div>
      
      <Section1 user={user}/>
      
      
     

    </div>
  )
}

export default App