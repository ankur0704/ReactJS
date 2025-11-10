import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data);
    
  }

  useEffect(function(){
    getData()
  }, [index])


  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  
  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div key={idx}>
        <div className='overflow-hidden h-40 w-44 bg-white rounded-xl'>

          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
    })
  }





  return (
    <div className='bg-black h-screen p-4 text-white'>
      {/* <button
      onClick={getData} 
      className='  bg-green-600 active:scale-95 mb-3  text-white px-5 py-2 rounded'>
        get data
        </button> */}
        <div className='flex h-[82%] flex-wrap gap-4 p-2' >
          {printUserData}
        </div>

        <div className='flex gap-6 justify-center items-center p-4'>
          
          <button className='text-sm cursor-pointer active:scale-95 bg-amber-300 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])          
            }           
          }}
          
          >
            Prev
            </button>
            <h4>Page{index}</h4>
          <button className='text-sm cursor-pointer active:scale-95  bg-amber-300 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }}
          
          >
            Next
            </button>
        </div>
    </div>
  )
}

export default App
