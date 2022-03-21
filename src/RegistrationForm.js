import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  // import CreateUser from './CreateUser';
  const RegistrationForm = () => {
  let redirectpage = useNavigate();

  // State manage
  const[userData,setUserData] = useState({
    name:'',
    email:'',
    state:'',
    phone:'',
    age:'',
    img:''

  });

  //onChange event  function
    const changeHandle = (e) =>{
    const{name,value}=e.target
    if (name==="img"){

      console.log(e.target.files);
      setUserData({...userData,[name]: e.target.files[0]})
    }
    else setUserData({...userData,[name]:value})
  }

  // submit event function
  const submitHandler = (e) =>{
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



    axios.post("http://192.168.0.15:5000/user/create", formData)
      .then(res => {
        console.log(res);
        redirectpage('/exitance');
      })
      .catch(err => {
        console.log(err);
      })

  // redirectpage send to data exitance
    
    console.log(userData); 
  }

  // const handlExitance = () =>{

  // }

  const exitanceHandle = () =>{
    redirectpage('/exitance')
  }
  
  return (
    <div className='container my-3 p-4'>
     <h1>Registration Form</h1>
    {/* form */}
    <form onSubmit={submitHandler}>

    {/* name input box */}
        Name:<input 
        type="text"
        className='form-control'
        placeholder='Please Enter Your Name'
        id="name"
        name="name"
        value={userData.name}
        onChange={changeHandle}
         />

    {/* Email input box */}
        Email<input 
        type="email"
        className='form-control'
        placeholder='Please Enter Your Email'
        id="email"
        name="email"
        value={userData.email}
        onChange={changeHandle}
         />

    {/* state inpu box  */}
        state:<input 
        type="state"
        className='form-control'
        placeholder='Please Enter Your state'
        id="state"
        name="state"
        value={userData.state}
        onChange={changeHandle}
         />

    {/* phone  input box */}
        Phone:<input 
        type="number"
        className='form-control'
        placeholder='Please Enter Your Phone'
        id="phone"
        name="phone"
        value={userData.phone}
        onChange={changeHandle}
         />

    {/* Age input box */}
        Age:<input 
        type="number"
        className='form-control'
        placeholder='Please Enter Your Age'
        id="age"
        name="age"
        value={userData.age}
        onChange={changeHandle}
         />
     {/*Image file  */}
        Image:<input
        type="file"
        className='form-control'
        id="img"
        name="img"
        onChange={changeHandle}
         />
        
        {/* Button submit event */}
         <button type="submit"  className='btn btn-primary mt-2 m-2'>Submit</button>

         <button type="submit" onClick={exitanceHandle} className='btn m-2 btn-primary mt-2'>Exitance</button>
      </form>
    </div>
  )
}

export default RegistrationForm;