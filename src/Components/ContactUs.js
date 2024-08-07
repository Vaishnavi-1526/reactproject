import React, { useState ,useEffect} from 'react'
import "../Css/style.css"
import {  useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
function ContactUs() {
    const navigate=useNavigate();
    useEffect(() => {
        const role=JSON.parse(localStorage.getItem('userRole'));
        if(role===null){
            
                alert("Invalid credentials.Try again or Sign up for free");
            

        
        navigate("/");
        }
    }, [])
        
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        help:""
    });
    function handSubmit(e){
        e.preventDefault();
    }
    function handleChange(e){
        const message=JSON.parse(localStorage.getItem('userRole'));
        if(message==="admin"){
        }
        else if(message==="normal"){
            let inputName=e.target.name;
            let inputVal=e.target.value;
            let oldFormData={...formData};
            oldFormData[inputName]=inputVal; 
            setFormData(oldFormData);       
        }
        else{
            
                alert("You need to login first");
            
        }
    }
    let styleApp={
        backgroundColor:"brown",
        padding:" 10px",
        color:"white",
    }
  return (
    <div style={{width:'100%',margin:'auto',backgroundColor:'grey',height:'100vh'}}>
        <div style={{width:'98%',margin:'auto',backgroundColor:'white',height:'100vh'}}>
    <div className="start">
        <div className="contact">
            <br></br><br></br>
            <NavLink to="/home" style={{textDecoration:'none',color:'black'}}><h1>B.planet</h1></NavLink>
            <NavLink to="/contactus" style={{textDecoration:'none',color:'black'}}><h2 >Contact Us</h2></NavLink>
        </div>

        <div className="contain-1">
            <div className="box-1">
                <p style={{marginBottom:'30px'}}> <span style={{fontSize:"15px",fontWeight:"bold"}}>Stay Updated</span><br/>Need to get in touch with us ?</p>
                <NavLink to="https://www.facebook.com" style={{color:'black'}}>Facebook</NavLink><br></br>
                <NavLink to="https://www.facebook.com" style={{color:'black'}}>Instagram</NavLink>
            </div>

            <div className="box-2">

                <form onSubmit={handSubmit}>
                    <textarea value={formData.name} name="name" placeholder="Name" rows="1" cols="auto" onChange={handleChange} style={styleApp}></textarea><br/><br/>
                    <textarea value={formData.email} rows="1" name="email" placeholder='Email-address' onChange={handleChange} style={styleApp}></textarea><br/><br/>
                    <textarea value={formData.help} rows="3" name="help" placeholder='What can we help you with' onChange={handleChange} style={styleApp}></textarea><br/>
                    <button type="submit" style={{borderRadius:'20px',backgroundColor:"rgb(156,125,63)",width:'70px'}}>Submit</button>
                </form>

            </div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default ContactUs;
