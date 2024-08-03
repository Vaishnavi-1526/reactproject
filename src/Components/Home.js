import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import image1 from "../folder/image1.png"
import HeroImage1 from "../folder/HeroImage1.png"
import HeroImage2 from "../folder/heroImage2.png"
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch,useSelector } from 'react-redux'
import { setPage, nextPage, prevPage, goToFirstPage, goToLastPage } from '../Redux/imagesSlice';


function Home() {
  const location=useLocation();
  const navigate=useNavigate();
  
  const role=JSON.parse(localStorage.getItem("userRole"));
  console.log(role);
  useEffect(() => {
    if(role===null){
      Swal.fire({
        title:"Not logged in ?",
        text:"Log In or Sign Up",
        icon:"warning"
    });
    navigate("/");
    }
  }, [role,navigate])
  let ans=localStorage.getItem("title");
  if(ans===null){
    console.log("So it is null")
    ans=" 'As interesting as a Plant' "
  }
  let template=ans;
  const [title,setTitle]=useState(template);
  const handleChange=(e)=>{
    if(role==="admin"){
      localStorage.setItem('title',e.target.value);
      setTitle(e.target.value);
    }
  }
  const dispatch = useDispatch();
    const { images, currentPage, itemsPerPage } = useSelector((state) => state.images);

    // Calculate indices for the current page
    const indexOfLastImage = currentPage * itemsPerPage;
    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const handlePrevPage = () => dispatch(prevPage());
    const handleNextPage = () => dispatch(nextPage());
    const handleFirstPage = () => dispatch(goToFirstPage());
    const handleLastPage = () => dispatch(goToLastPage());
  
  return (
    <div className='home'>
      <div className='under'>
        <div className='furthur'>

          <div style={{display:"flex",justifyContent:"space-between"}}>
            <Link to="/home" style={{textDecoration:"none",color:"black"}}><h2 style={{alignSelf:"flex-start",flexBasis:'80%',marginTop:'20px'}}>B.planet</h2></Link>


            <div style={{display:"flex",gap:"10px",flexDirection:"row",justifyContent:"end",alignItems:"top",textAlign:"right",flexBasis:'20%',marginTop:'20px'}}>

            <Link to="/contactus" style={{textDecoration:"none",color:"black"}}><h3 style={{textAlign:'end',border:'2px solid black',borderRadius:'100px'}}>Contact us</h3></Link>
            {role==="normal" && 
            (<Link to="/aboutusadmin" style={{textDecoration:"none",color:"black"}}>
              <img src={image1} alt="logo" height="30px" style={{borderRadius:"50%",backgroundColor:"white"}}/>
             </Link>)}
            {role==="admin" && (<Link to="/" style={{textDecoration:"none",color:"black"}}><h3>Login</h3></Link>)}
            </div>
          </div>

          <div class="plant" style={{marginTop:"10vh"}}>
              <span style={{display:"flex",justifyContent:"center"}}>
                <textarea rows="8" cols="20" value={title} onChange={handleChange} style={{alignSelf:"center",backgroundColor:"rgb(156, 125, 63)",margin:"0px",fontSize:'25px',fontWeignt:'bolder',padding:'10px 10px'}} className={role==="normal"?"borderless":""}></textarea>
                  <img src={HeroImage2} height="400px" width="350px"></img>
                  <img src={HeroImage1} height="370px" width="300px" style={{alignSelf:"end"}}></img></span>
          </div>
        </div>
      </div>
      <div className='under2'>
        <div class="furthur2">
          <h3 style={{padding:"10px"}}>Featured Product</h3>
          <div className="image-grid">
                {currentImages.map((image) => {
                        return(<Link to={`/description/${image.id}`} key={image.id} style={{color:"black",textDecoration:'none'}}>
                            <span style={{display:"flex",border:"2px solid  rgb(213, 177, 105)"}}>
                              <img src={image.src} alt={`Plant ${image.id}`}/>
                              <span style={{alignSelf:"center"}}>{image.description}</span>
                            </span>
                        </Link>);
                        
                }   
                )}
          
          </div>

          <div className="pagination" style={{textAlign:"end",backgroundColor:"white",display:"flex",justifyContent:"center",width:"100%",margin:"auto",fontWeight:"bold"}}>
                <button onClick={handleFirstPage} style={{fontWeight:"bold",border:"1px solid white",margin:"5px"}}>
                    First
                </button>
                <button style={{border:"1px solid white",fontWeight:"bold",margin:"5px"}} onClick={handlePrevPage}>
                    Previous
                </button>
                <button style={{border:"1px solid white",fontWeight:"bold",margin:"5px"}} type="button">Page {currentPage}</button>
                <button onClick={handleNextPage} style={{border:"1px solid white",fontWeight:"bold",padding:"10px",margin:"5px"}}>
                    Next
                </button>
                <button onClick={handleLastPage} style={{border:"1px solid white",fontWeight:"bold",margin:"5px"}}>
                    Last
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home