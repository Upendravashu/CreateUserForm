import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
const User = () => {
    let {id}= useParams();
    const[userData,setUserData]= useState([]);
    useEffect(()=>{
        axios.get('http://192.168.0.15:5000/user/'+id)
        .then(resp =>{
            console.log(resp)
            setUserData(resp.data)
        })
    },[])
       
    const editHandle = (e) =>{
        const{name,value}=e.target
        if (name==="img"){
    
          console.log(e.target.files);
          setUserData({...userData,[name]: e.target.files[0]})
        }
        else setUserData({...userData,[name]:value})
      }

    const formSubmit = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append("name",userData.name)
        formData.append("email",userData.email)
        formData.append("phone",userData.phone)
        formData.append("age",userData.age)
        formData.append("state",userData.state)
        formData.append("img",userData.img)
   
   
       // axios({
       //   method: 'post',
       //   url: 'http://192.168.0.15:5000/user/create',
       //   data: formData
       // });
   
   
   
       axios.patch("http://192.168.0.15:5000/user/"+id, formData)
         .then(res => {
           console.log(res.data);
        //    redirectpage('/exitance');
         })
         .catch(err => {
           console.log(err);
         })
   
     // redirectpage send to data exitance
       
       console.log(userData); 
     }
   
    

    
  return (
    <div className='container'>
    <img src={userData.img} style={{width: "200px"}} className="card-img-top" alt="..."/>
        <form onSubmit={formSubmit}>
           Name:<input
           type="text"
           className='form-control'
           placeholder='Please Enter Your Name'
           name="name"
           id="name"
           value={userData.name}
           onChange={editHandle}
            />

            Email:<input
                type="email"
                className="form-control"
                placeholder="Please Enter Your Email"
                name="email"
                id="email"  
                value={userData.email}
                onChange={editHandle}
            />

                State:<input
                type="text"
                className="form-control"
                placeholder="Please Enter Your State"
                name="state"
                id="state"
                value={userData.state}
                onChange={editHandle}  
            />

                Phone:<input
                type="number"
                className="form-control"
                placeholder="Please Enter Your PhoneNumber"
                name="phone"
                id="phone"  
                value={userData.phone}
                onChange={editHandle}
            />

                Age:<input
                type="number"
                className="form-control"
                placeholder="Please Enter Your Age"
                name="age"
                id="age"
                value={userData.age}
                onChange={editHandle}  
            />
            Image:<input 
                type="file"
                className='form-control'
                id="img"
                name="img"
                // value={userData.img}
                onChange={editHandle}
            />
            <button type ='submit'  className="btn btn-primary mt-2 m-1 ">Edit</button>

            <Link to={"/exitance"} className={"btn btn-danger mt-2 m-1"}>Back</Link>
            
        </form>
    </div>
  )
}

export default User;