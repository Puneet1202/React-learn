
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [submit, setsubmit] = useState(false)

  function handleSubmite(e){
    e.preventDefault();

    if(name === "" || email === ""){
      alert("Please fill in all fields");
      setsubmit(false);
    }

            setName('');
            setEmail('');
            setsubmit (true);
            

  }

  function handleReset(){
    setName("");
    setEmail("");
    setsubmit (false);
  }

  return (
    <div className='bg-blue-100 min-h-screen '>
        <h1>Contact Page</h1>

        <form className='flex justify-center items-center flex-col' onSubmit={handleSubmite}>
            <input type="text" placeholder='Name'  className='border-2 m-2 p-2' value={name} onChange= {(e)=> setName(e.target.value)}/>
            <br/>
            <input type="email" placeholder='Email' className='border-2 m-2 p-2' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <button type="submit" className='bg-blue-500 text-white p-2 m-2 rounded'>Submit</button>
            <button type="reset" className='bg-red-500 text-white p-2 m-2 rounded' onClick={handleReset}>Reset</button>
        </form>
        {submit &&(
          <div className='bg-green-200 p-4 m-4 rounded'>
            <h2 className='text-green-800 font-bold text-lg'>Form Submitted Successfully!</h2>
          
            <h2 className='text-green-800 font-bold text-lg'>Submitted Data:</h2>
            <p><span className='font-bold'>Name:</span> {name}</p>
            <p><span className='font-bold'>Email:</span> {email}</p>
            </div>

        )}

       
    </div>
  )
}

export default App;