import React from 'react'


const Card = (props) => {
    console.log(props.user, props.age);  //AMAN 18
    
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum amet accusantium doloremque eum labore modi provident necessitatibus fuga explicabo accusamus, velit ducimus praesentium ipsum obcaecati veniam libero dolorem. Assumenda!</p>
      <button>View</button>
    </div>
  )
}

export default Card
