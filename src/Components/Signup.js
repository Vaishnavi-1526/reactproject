import React,{useEffect, useState} from 'react'
import LoginInPageImage from "../folder/Login in page image.png"
import "../Css/style.css"

import { useNavigate,NavLink } from 'react-router-dom'
function Signup() {
  const [showPassword,setShowPassword]=useState(false);
  const [data,setData]=useState({});
  const [selectedRadio,setSelectedRadio]=useState(null);
  const myStyle={
    marginLeft:"50px",
    width:"80px",
    height:"30px",
    borderRadius:"15px",
    fontWeight:"500",
    backgroundColor:"rgb(156,125,63)"
    }
const navigate=useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    let info={
        name: e.target.name.value,
        password: e.target.password.value,
        role : selectedRadio
    };

    setSelectedRadio(selectedRadio);
    setData(info);
    localStorage.setItem('userInformation', JSON.stringify(info));
    localStorage.setItem('userRole', JSON.stringify(selectedRadio));
    navigate("/home");
}
  return (
    <div>
        <div className='container'>
            <NavLink to="/home"><h2> B.planet</h2></NavLink>
            <NavLink to="/contactus"><h3> Contact Us </h3></NavLink>
        </div>
        <div className='login-container'>
            <img src={LoginInPageImage} alt="logo" />
            <div>
            <span style={{fontWeight:"500"}}>Login</span><br></br><small>Welcome back!!</small><br></br><br></br>
                <form onSubmit={handleSubmit} className='log'>
                    <label htmlFor='name' style={{fontWeight:"500"}}>UserName</label>
                    <input type="text" name="name" required></input>
                    <label htmlFor='password' style={{fontWeight:"500"}} required>Password</label>

                    <span style={{display:"flex",width:'100%'}}>
                    <input type={(showPassword?"text" : "password")} name="password"></input>
                    <button onClick={()=>setShowPassword(!showPassword)} type="button">
                        <i className={showPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i></button
                    ></span>

                    <span style={{fontWeight:"500"}}>Choose Your Role</span>
                    <span style={{display:"flex"}}>
                        <label htmlFor='normal'>normal</label><input type="radio" name='role' id='normal' onClick={()=>setSelectedRadio('normal')}></input>
                    </span>
                    <span style={{display:"flex"}}>
                        <label htmlFor='admin'>admin</label><input type="radio" name='role' id='admin' onClick={()=>setSelectedRadio('admin')}></input>
                    </span>
                    <button style={myStyle} type="submit">Signup</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
