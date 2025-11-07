import { useState } from "react"



const App = () => {
  const [num, setNum] = useState({user:'ANKUR', age:'20'})



  const clicked=()=>{
    const newNum={...num};
    newNum.user='harsh'
    newNum.age='99'
    
    setNum(newNum)
  }


  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={clicked}>CLICK</button>
    </div>
  )
}

export default App
