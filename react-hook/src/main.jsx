import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollBehaviourUseRef from '../src/scroll-behaviour-useref/index.jsx'
import Exercise_01_state_batching from './interview-problem-solution/exercise-01-state-batching.jsx'
import Exercise02UseEffectDependencies from './interview-problem-solution/exercise-02-useeffect-dependencies.jsx'

createRoot(document.getElementById('root')).render(
  
    // {/* <Exercise02UseEffectDependencies/> */}
   
    // {/* <BrowserRouter>
    //   <ScrollBehaviourUseRef />
    // </BrowserRouter> */}
    
       <App/>
 
)
