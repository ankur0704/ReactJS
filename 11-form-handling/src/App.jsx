

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()    //prevent default behaviour of form
    console.log('Form Submitted');
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter your name">
        </input>
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App
