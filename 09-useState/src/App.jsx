import { useState} from "react"


const App = () => {

  const [num, setNum] = useState(0)   //useState
  function increaseNum(){          //function
    setNum(num+1)

  }
  function decreaseNum(){           //function
    setNum(num-1)

  }
  function jumpFiveNum(){
    setNum(num+5)
  }



  
  // const [num, setNum] = useState(20);   // var num, num-> read only, setNum -> change karneka
  // const [username, setUsername] = useState('ANKUR')
  // const [users, setUsers] = useState([10,20,30])

  // function changeNum(){
  //   setNum(30)
  //   setUsername("LOKI")
  //   setUsers([60,70,80])
  // }



  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>INCREASE</button>
      <button onClick={decreaseNum}>DECREASE</button>
      <button onClick={jumpFiveNum}>JUMP BY 5</button>






      {/* <h1>Value of a is {num} <br />value of user is {username} <br />new arr is {users}</h1>
      <button onClick={changeNum}>Click</button>  */}
    </div>
  )
}

export default App
