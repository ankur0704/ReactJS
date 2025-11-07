import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()    //prevent default behaviour of form
    console.log('Form Submitted by', title);
    setTitle('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder="Enter your name"
        value={title}  // cant change this from the form(i.e we cant write anything expect this).
        onChange={(e)=>{
          setTitle(e.target.value);

        

        }}>
        </input>

        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App




















