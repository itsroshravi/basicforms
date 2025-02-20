
import './validate.css'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [age, setAge] = useState('') // useState to store Age
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  return (
    <div className="main">
      <form>
      
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
       
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
       
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
