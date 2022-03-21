import React from 'react';
import { useNavigate } from 'react-router-dom';
  const MyCard = ({user}) => {
    // console.log(user);
    const navigate = useNavigate()
    const handelClick = (e) =>{
        navigate("/user/"+ user.id)
    }

  return (
    <div className="card mycard"onClick={handelClick} style={{width: "18rem"}}>
         <img src={user.img} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title"style={{textAlign:'center'}}>AllTrak</h5>
         <p className="card-text">Name: {user.name}</p>
         <p className="card-text">Email: {user.email}</p>
         <p className="card-text">State: {user.state}</p>
         <p className="card-text">Phone: {user.phone}</p>
         <p className="card-text">Age: {user.age}</p>
         {/* <p className="card-text">Image: {user.img}</p> */}
        {/* <Link to="#" class="btn btn-primary">Go somewhere</Link> */}
      </div>
      </div>
    // <div className='container mt-5' >
    // <div className='row'>
    //   <div className='col-10 col-md-3 mt-5'>
        
    //   </div>
    // </div>
    // </div>
  )
}

export default MyCard;