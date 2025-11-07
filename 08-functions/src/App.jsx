

const App = () => {

  function okDone(){
    console.log('hello');
  }

  function inputChanging(){
    console.log('user is typing');
  }



  function btnClicked(){
    console.log('button is clicked');
  }

  function mouseEnter(){
    console.log('mouse entered');
  }
  
  const pageScrolling=()=>{
    console.log('page scrolling...');
  }



  return (
    <div>
      





      <div onWheel={(elem)=>{
        console.log(elem.deltaY);
        pageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>

      </div>



      <div onMouseMove={()=>{
        console.log('nachoooo');
      }} className="box"
      >
      </div>

      <h1>hello guys</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click Here</button>
      {/* <button onClick={function(){
        console.log('hello guys');
      }} >explore this</button> */}

        <input onChange={inputChanging} type="text" placeholder="Enter name" />

    </div>
  )
}

export default App
