import { useState,useEffect } from "react"

export default function Dashboard(){

const [projects,setProjects] = useState([])
const [title,setTitle] = useState("")
const [description,setDescription] = useState("")

const fetchProjects = async () => {

const res = await fetch("http://localhost:5000/api/projects")

const data = await res.json()

setProjects(data)

}

useEffect(()=>{
fetchProjects()
},[])

const createProject = async () => {

await fetch("http://localhost:5000/api/projects",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({
title,
description
})

})

fetchProjects()

}

return (

<div>

<h2>Dashboard</h2>

<input placeholder="Project Title"
onChange={(e)=>setTitle(e.target.value)} />

<input placeholder="Description"
onChange={(e)=>setDescription(e.target.value)} />

<button onClick={createProject}>Create Project</button>

<h3>Projects</h3>

{projects.map((p)=>(
<div key={p._id}>
<h4>{p.title}</h4>
<p>{p.description}</p>
</div>
))}

</div>

)

}