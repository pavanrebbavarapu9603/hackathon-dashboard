import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const registerUser = async () => {

await fetch("http://localhost:5000/api/auth/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,email,password})
})

alert("User registered")

navigate("/")

}

return (
<div>

<h2>Register</h2>

<input placeholder="Name"
onChange={(e)=>setName(e.target.value)} />

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)} />

<input type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)} />

<button onClick={registerUser}>Register</button>

</div>
)

}