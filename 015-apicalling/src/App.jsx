import axios from 'axios'
import React, { useState } from 'react'
  

const App = () => {

  // async function getData(){

  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response);
  // }

  // const getData=async()=>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json()
  //   console.log(data);
    
  // }016


  //using axios
  //npm i axios
  // const getData= async()=>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response.data);
    

  // }
  const [data, setData] = useState([])

  const getData=async()=>{

    

    const response = await axios.get('https://v2.jokeapi.dev/joke/Any')

    setData(response.data);
    

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello{idx}</h3>
        })}

      </div>
    </div>
  )
}

export default App
