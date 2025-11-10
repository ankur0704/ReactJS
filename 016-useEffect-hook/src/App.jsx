import React, { useEffect, useState } from 'react'

const App = () => {
//   const [num, setnum] = useState(0)
//   const [num2, setnum2] = useState(100)

//   useEffect(function(){
//     console.log('use effect is running...');  
//   },[num])  //num is passed  as dependency


//   return (
//     <div>
//       <h1>value is num is {num}</h1>
//       <h1>value of num2 is {num2}</h1>
//       <button onClick={()=>{
//         setnum(num+1)
//         setnum2(num2+100)
//       }}>CLICK ME</button>
//     </div>
//   )

  //useState hook
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)


  function aChanging(){
    console.log('A value change');
    
  }
  function bChanging(){
    console.log('B value change');
    

  }

  //useEffect hook
  useEffect(function(){
    console.log('Use effect is running...');
  },[b])

  useEffect(function(){
    console.log('Use effect is running...'); 
  },[a])



  return(
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      
      }}>ChangeA</button>
      <button onClick={()=>{
        setB(b+1)
      }}>ChangeB</button>
    </div>
  )


 }

export default App
