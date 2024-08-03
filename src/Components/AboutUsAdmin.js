import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import React, { useState,useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import LoginInPageImage from "../folder/LoginInPageImage.png"
import Swal from 'sweetalert2';

export default function AboutUsAdmin() {
  const message=JSON.parse(localStorage.getItem("userRole"));
  console.log("In adminabout");
  console.log(message);
  const[change,setChange]=useState(false);
  const initialState = {
    name :'Vaishnavi',
    email :'vaishnavi@gmail.com',
    password :'vaai@2434',
    number : '2546984576',
    address :'Paradeep',
    state : 'Odisha',
    zipcode :'754212'
  }
  useEffect(() => {
    const storedData=localStorage.getItem("admin");
    if(storedData){
      setStatus(JSON.parse(storedData));
    }
    else{
      localStorage.setItem("admin",JSON.stringify(initialState));
      setStatus(initialState);
    }
  }, []);
  
  const [status,setStatus]=useState(initialState);
  
  function handleEdit(e){
    if(message == "admin"){
      console.log("HIHI")
      setChange(true);
    }
  }
  function handleChange(e){
      if(change===true){
      console.log("HIHI")
      let inputName=e.target.name;
      let inputVal=e.target.value;
      let oldData={...status};
      oldData[inputName]=inputVal;
      setStatus(oldData);
      localStorage.setItem('admin',JSON.stringify(oldData));
    }
    else{
      Swal.fire({
        title:"Input not Received",
        icon:"warning"
      })
    }
  }
  return (
    <div className="total" style={{width:'100%',margin:'auto',backgroundColor:'grey',height:'109vh'}}>
      <div style={{width:'98%',margin:'auto',backgroundColor:'white',height:'109vh'}}>
      <div className='container'>
            <h2><NavLink to="/home" style={{textDecoration:'none',color:'black'}}>B-Planet</NavLink></h2>
            <h3><NavLink to="/contactus" style={{textDecoration:'none',color:'black'}}>Contact Us</NavLink></h3>
        </div>
      <form>
      
      <div className="about">

        <div className='box'></div>
          <img src={LoginInPageImage} alt="logo" height="80px" width="80px" className='image'></img>

        <span style={{display:"flex",marginBottom:"0px",height:"24px"}}>
          <label htmlFor="name" style={{flexBasis:"77%"}}>Name </label> 
          <span style={{flexBasis:"23%"}}>Edit<button type="button" onClick={handleEdit} ><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></button></span>
        </span>
        <input type="text" name="name" value={status.name} onChange={handleChange}></input><br></br>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={status.email} onChange={handleChange}></input><br></br>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={status.password} onChange={handleChange}></input><br></br>

        <label htmlFor="number">PhoneNumber</label>
        <input type="number" name="number" value={status.number} onChange={handleChange}></input><br></br>

        <label htmlFor="address">Address</label>
        <input type="text" name="address" value={status.address} onChange={handleChange}></input><br></br>

        <div className='grid1'>
        <label htmlFor="state">State</label>
        <label htmlFor="zipcode">Zip-Code</label>
        <input type="text" name="state" value={status.state} onChange={handleChange}></input>
        <input type="number" name="zipcode" value={status.zipcode} onChange={handleChange}></input><br></br>
        </div>
      </div>

      </form>
      <Outlet/>
      </div>
    </div>
  )
}