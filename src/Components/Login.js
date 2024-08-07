import React, { useEffect, useState } from 'react'
import LoginInPageImage from "../folder/Login in page image.png"
import "../Css/style.css"
import usersData from "../Data/Users.json";
import {  NavLink, useNavigate } from 'react-router-dom';


function Login() {
    const [showPassword,setShowPassword]=useState(false);
    const [userRol,setUserRol]=useState(null);
    const navigate=useNavigate();
    useEffect(() => {
      localStorage.setItem("userRole",userRol);
    
    }, [])
    
    
    const myStyle={
        marginLeft:"50px",
        marginTop:"10px",
        width:"80px",
        height:"30px",
        borderRadius:"15px",
        backgroundColor:"rgb(156,125,63)"
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let storedUserInfo=JSON.parse(localStorage.getItem('userInformation'));
        if(storedUserInfo===null){
            storedUserInfo={
                name:'',
                password:'',
                role:''
            }
        }


        let userArr=usersData.filter((user)=>{
            return e.target.name.value===user.username && e.target.password.value===user.password});

        if(userArr.length===1){
            if(userArr[0].role==="admin" || userArr[0].role==="normal"){
                localStorage.setItem("userRole",JSON.stringify(userArr[0].role))
                navigate("/home");
            }
        }
        else if((storedUserInfo!=null) && (storedUserInfo.name===e.target.name.value && storedUserInfo.password===e.target.password.value)){
                localStorage.setItem("userRole",JSON.stringify(storedUserInfo.role))
                navigate("/home");
        }
        else{
            alert("Invalid");
        }
    }
  return (
    <div className='login-page' style={{width:'100%',margin:'auto',backgroundColor:"grey",height:'100vh'}}>
        <div style={{width:'98%',margin:'auto',backgroundColor:"white",height:'100vh'}}>
        <div className='container'>
            <NavLink to="/home" style={{color:'black'}}><h2> B.planet</h2></NavLink>
            <NavLink to="/contactus" style={{color:'black'}}><h3> Contact Us </h3></NavLink>
        </div>
        <div className='login-container'>
            <img src={LoginInPageImage} alt="logo" />
            <div>
            <span style={{fontWeight:500}}>Login</span><br></br><small>Welcome back!!</small><br></br><br></br>
                <form onSubmit={handleSubmit} className='log'>
                    <label htmlFor='name' style={{fontWeight:500}}>UserName</label>
                    <input type="text" name="name" required></input>
                    <label htmlFor='password' style={{fontWeight:500}}  required>Password</label>

                    <span style={{display:"flex"}}>
                        <input type={(showPassword?"text" : "password")} name="password"></input>
                        <button onClick={()=>setShowPassword(!showPassword)} type="button">
                        <i clasName="fa-solid fa-eye"></i></button>
                    </span>
                    <button style={myStyle} type="submit">Login</button>
                </form>
                <p>Don't have an account yet ? <NavLink to="/signup" style={{textDecoration:'none',color:'green'}}>Sign up for free</NavLink></p>
            </div>
        </div>
        </div>
    </div> 
  )
}

export default Login;
