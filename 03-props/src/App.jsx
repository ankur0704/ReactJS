import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>  
    
    <Card user='AMAN' age={18} img='https://plus.unsplash.com/premium_photo-1671077420134-4cce62252a2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBncmFwaGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' />
    <Card user='RAJ' age={21} img='https://images.unsplash.com/photo-1627389955646-6596047473d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8M2QlMjBncmFwaGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
    <Card user='CHAMAN' age={30} img='https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
   
    </div>
  )
}

export default App
