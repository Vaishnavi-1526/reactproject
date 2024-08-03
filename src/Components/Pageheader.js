import React from 'react'
import {  useLocation, useParams } from 'react-router-dom';

function Pageheader() {
    const location=useLocation();
    const { id }=useParams();
    const num=parseInt(id,10);
    console.log(num);
    console.log(location);
  return (
    <div>
        {location.pathname==="/" && (<h1 className='Head'>In login Page</h1>)}
        {location.pathname==="/aboutusadmin" && (<h1 className='Head'>Profile/About Us Page</h1>)}
        {location.pathname==="/contactus" &&  (<h1 className='Head'>Contact Us</h1>)}
        {location.pathname==="/signup" &&  (<h1 className='Head'>In Signup Page</h1>)}
        {location.pathname==="/home" &&  (<h1 className='Head'>Home</h1>)}

       
    </div>
  )
}

export default Pageheader;