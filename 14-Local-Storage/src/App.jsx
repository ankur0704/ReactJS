

const App = () => {

  // sessionStorage.clear()
  // localStorage.clear()

  // use to set item
  // localStorage.setItem('user', 'Ankur')     // creates a key value pair type storage in local storage.


  // const user = localStorage.getItem('user')
  // console.log(user);

  const user={     // object form
    username:'ankurrr',
    age:'21',
    city:'PUNE'
  }
  
  localStorage.setItem('user',JSON.stringify(user))   //in string form


  return (
    <div> 
      App
    </div>
  )
}

export default App
App