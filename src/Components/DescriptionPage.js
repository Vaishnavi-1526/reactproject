import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../Css/style.css"


export default function DescriptionPage () {
    const { id } = useParams();
    const num=parseInt(id,10);
    
    const role=JSON.parse(localStorage.getItem('userRole'));
    if(role==="admin"){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    console.log(role);
    
    
    const { images } = useSelector((state) => state.images);
    const image = images.find((img) => img.id === parseInt(id, 10));
    const initialState={
        title:image ? image.description : "",
        subtitle:'No Data entried',
        guidetitle:'No Data entried',
        guide1:'No Data entried',
        description1:'No Data entried',
        guide2:'No Data entried',
        description2:'No Data entried',
        guide3:'No Data entried',
        description3:'No Data entried',
        description:'No Data entried',
        write:'No Data entried'
    };
    const [data,setData]=useState(initialState);
    const [isEdit1,setisEdit1]=useState(false);
    const [isEdit2,setisEdit2]=useState(false);
    const [isEdit3,setisEdit3]=useState(false);
    useEffect(() => {
        const storedData=localStorage.getItem(`description_${id}`);
        if(storedData){
          setData(JSON.parse(storedData));
        }
        else{
          localStorage.setItem(`description_${id}`,JSON.stringify(initialState));
          setData(initialState);
        }
      }, []);
    function handleClick(e){
        let inputName=e.currentTarget.name;
        console.log(inputName);
        if(inputName==="pencil1" ){
            setisEdit1(true);
        }else if(inputName==="pencil2"){
            setisEdit2(true);
        }else if(inputName==="pencil3"){
            setisEdit3(true);
            console.log("SetEdit3 has been true");
        }
    }
    function handleChange(e){
        let inputName=e.target.name;
        let inputId=e.target.id;
        console.log(inputName);
        console.log(inputId);
        if(isEdit1){
            if(inputName==="titles"){
                let newData={...data};
                newData[inputId]=e.target.value;
                console.log(newData);
                setData(newData);
                localStorage.setItem(`description_${id}`,JSON.stringify(newData));
            }
        }
        if(isEdit2){
            if(inputName==="guidetitles"){
                let newData={...data};
                newData[inputId]=e.target.value;
                console.log(newData);
                setData(newData);
                localStorage.setItem(`description_${id}`,JSON.stringify(newData));
            }
        }
        if(isEdit3){
            if(inputName==="descriptions"){
                console.log(inputId);
                let newData={...data};
                newData[inputId]=e.target.value;
                console.log(newData);
                setData(newData);
                localStorage.setItem(`description_${id}`,JSON.stringify(newData));
            }

        }
    }

    if (!image) {
        return <div>Image not found!</div>;
    }
    console.log(image.description);
    return (
        <div>
            <h1 className='Head'>Description Page</h1>
            <div className='home' style={{height:"180vh"}}>
                <div className="under" style={{backgroundColor:"white"}}>
                    <div className="furthur" style={{backgroundColor:"white",height:"180vh"}}>
                        <br/>
                        <div style={{display:"flex", marginTop:"20px"}}>
                            <NavLink to="/home" style={{textDecoration:'none',color:'black',flexBasis:"85%",textAlign:"center"}}><h2 >B.planet</h2></NavLink>
                            <NavLink to="/contactus" style={{textDecoration:'none',color:'black',flexBasis:"15%",textAlign:"center",border:"2px solid black",borderRadius:"15px"}}><h2>Contact Us</h2></NavLink>
                        </div>
                        <br></br><br></br>
                        <div style={{backgroundColor:"white"}}>
                                <div style={{padding:"20px",display:"flex",flexDirection:'column',float:'right',marginLeft:"15px"}} className={`${(role=="normal")?"borderles":"bordered"}`}>
                                    <img src={image.src} height="200px" width="200px"></img>
                                    <span style={{textAlign:'center'}}>{image.description}</span>
                                </div>

                                <div className={`d-flex ${(role=="normal")?"borderles":""}`}>

                                    <span style={{display:"flex"}}>
                                        
                                        <textarea rows="3" cols="40" placeholder="Title" style={{flexBasis:'98%', fontWeight:"800",fontSize:"25px"}} name="titles" id="title" value={data.title} onChange={handleChange} className="big"></textarea>
                                        {
                                    (role==="admin")
                                        ?
                                        <button style={{alignSelf:'end'}} onClick={handleClick} name="pencil1"><i className="fa-solid fa-pencil"></i></button>
                                        :
                                        <></>
                                    }</span><br/>

                                    <textarea rows="3" cols="10" placeholder="Sub Title" value={data.subtitle} name="titles" id="subtitle" onChange={handleChange}></textarea>
                                    <br/><br/>
                                    <span style={{display:"flex"}}>
                                        
                                        <textarea rows="3" cols="10" placeholder="Guide" name="guidetitles"  id ="guidetitle" style={{flexBasis:"98%",fontWeight:"800",fontSize:"25px"}} value={data.guidetitle}className="big" onChange={handleChange}></textarea>
                                    {
                                    (role==="admin")
                                        ?
                                        <button style={{alignSelf:'end',flexBasis:"2%"}}  onClick={handleClick} name="pencil2"><i className="fa-solid fa-pencil"></i></button>
                                        :
                                        <></>
                                    }</span><br/><hr/><br/>
                                    <div className={`flex-under ${role==="normal"?"borderles":""}`} style={{display:"flex"}}>

                                        <textarea rows="3"  placeholder="Guide1" style={{flexBasis:"30%",marginRight:"10px"}} name='guidetitles' id="guide1" onChange={handleChange} value={data.guide1}></textarea>

                                        <textarea rows="3" cols="31"  placeholder="Description" style={{flexBasis:"70%"}} name='guidetitles' id='description1' onChange={handleChange} value={data.description1}></textarea>
                                    </div>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <div className={`flex-under ${role==="normal"?"borderles":""}`}  style={{display:"flex"}}> 

                                        <textarea rows="3"  placeholder="Guide1" style={{flexBasis:"30%",marginRight:"10px"}} name='guidetitles' id='guide2' onChange={handleChange} value={data.guide2}></textarea>

                                        <textarea rows="3" cols="31"  placeholder="Description" style={{flexBasis:"70%"}} name='guidetitles' id='description2' onChange={handleChange} value={data.description2}></textarea>
                                    </div>
                                    <br/>
                                    <hr/>
                                    <br/>

                                    <div className={`flex-under ${role==="normal"?"borderles":""}`} style={{display:"flex"}}>

                                        <textarea rows="3"  placeholder="Guide1" style={{flexBasis:"30%",marginRight:"30px"}} name='guidetitles' id='guide3' onChange={handleChange} value={data.guide3}></textarea>

                                        <textarea rows="3" cols="31"  placeholder="Description" style={{flexBasis:"70%"}}  name='guidetitles' id='description3' onChange={handleChange} value={data.description3}></textarea>
                                    </div>
                                    <br/>
                                    <hr/>
                                    <br/><br/>
                                    <span style={{display:"flex"}}>
                                        
                                        <textarea rows="3"  placeholder="Description"className="big" name="descriptions" id="description" style={{flexBasis:'98%',fontWeight:"800",fontSize:"25px"}} onChange={handleChange} value={data.description}></textarea>
                                    {
                                        (role==="admin")
                                        ?
                                        <button style={{flexBasis:'2%',alignSelf:"end"}} name="pencil3" onClick={handleClick} ><i className="fa-solid fa-pencil"></i></button>
                                        :
                                        <></>
                                    }</span>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <textarea rows="5"  placeholder="Write your description here" name="descriptions" id="write" onChange={handleChange} value={data.write}></textarea>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
