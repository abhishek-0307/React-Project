import { Button, Input } from "@mui/material";
import {CircleUserRound,Compass,HomeIcon,Search,Settings,SquarePlus, X,} from "lucide-react";
import React, { useEffect, useState } from "react";
import "./style.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import Home1 from "./home1";
import Profile1 from "./profile1";
import ActionAreaCard from "./home2";
import Home3 from "./home3";
import Exploring from "./explore";
import { onValue, ref, set } from "firebase/database";
function Feed() {
  const auth = getAuth(app);

 

  const [action, upaction] = useState(1);
  const [user, upuser] = useState("");
  const [data,updata]=useState([]);
  const [datout,upput]=useState([]);
  const [username,upusername]=useState("");

  const[imLink,Upimglink]=useState({
    img:"",
    caption:"",
  });

  useEffect(()=>
  {

    // axios.get("http://test.touchapp.in/api/getFeeds").then((d)=>
    // console.log(d.data()))

    onAuthStateChanged(auth,(s)=>
    {
      if(s)
      {
        upuser(s.uid)

      }
    })

    onValue(ref(db,`users/${user}/Username`),(a)=>
    {
      if(a.val())
      upusername(a.val())

    })

    onValue(ref(db,`users/${user}/posts`),(a)=>
    {
      updata(a.val())

    })

    
    onValue(ref(db,`posts`),(a)=>
    {
      upput(a.val())

    })

    onValue(ref(db,`users/${user}/Username`),(a)=>
    {
      upusername(a.val())

    })



  },[])


  useEffect(()=>{
    onValue(ref(db,`users/${user}/Username`),(a)=>
    {
      if(a.val())
      upusername(a.val())

    })
  },[username,datout])

  useEffect(()=>{
    onValue(ref(db,`posts`),(a)=>
    {
      upput(a.val())

    })
  },[data])
// console.log(data);
 console.log(datout);

  const imgLink=(val)=>{
      Upimglink({...imLink,img:val.target.value})
  }
  const capLink=(val)=>{
    Upimglink({...imLink,caption:val.target.value})
  }

  const nav = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      nav("/");
    });
  };

  
  const ProfileACtion = (e) => {
    upaction(e);
  };
  const [openImage,SetOpenImage]=useState(null);
    const closeImg=()=>{
        SetOpenImage(null);
    }
    const openImg=(index)=>{
        SetOpenImage(index);
    }
   console.log(imLink);
    const [openImage1,SetOpenImage1]=useState(null);
    const closeImg1=()=>{
        SetOpenImage1(null);
    }
    const openImg1=(index)=>{
        SetOpenImage1(index);
    }
    
//pst
const handlepost=()=>
{

  if(datout)
  {
   var len=datout.length;
   console.log("entered if ")

  }
  else
  {
    var len=0;
    console.log("entered else")

  }
if(username)
{

  const imgdata={...imLink,username:username,like:0}
  console.log("hrvjefk md");
  console.log(imgdata)
  console.log("enter ed post ")

    set(ref(db,`users/${user}/posts/${len}`),imgdata)//profile
    set(ref(db,`posts/${len}`),imgdata);//display
}
}
//emd


  return (
    
    <>
      <div className="maindiv">
      
      {/* for create a post */}
      <div className="full-img" style={{ display: openImage !== null ? "flex" : "none" }}>
        {openImage !== null && (
          <>
            <div style={{height:"370px",width:"350px",backgroundColor:"rgb(45, 42, 42)",borderRadius:"10px"}}> 
              <h3 style={{color:"white",marginLeft:"90px"}}>Create New Post</h3>
              <hr/>
              <div style={{position:"relative",marginTop:"50px",marginLeft:"80px"}}>
              <Input onChange={imgLink} className="on-focus" style={{color:"white"}} placeholder='Enter Image Link'/><br/><br/>
              <Input onChange={capLink} className="on-focus" style={{color:"white"}} placeholder='write a caption...'/><br/><br/><br/>
              <Button variant="contained" style={{marginLeft:"45px"}} onClick={handlepost}>Submit</Button>
              </div>
              
            </div>
            <span onClick={closeImg}><X /></span>
          </>
        )}
      </div>
      
      {/* for search a post */}
      <div className="full-img" style={{ display: openImage1 !== null ? "flex" : "none" }}>
        {openImage1 !== null && (
          <>
            <div style={{height:"370px",width:"350px",backgroundColor:"rgb(45, 42, 42)",borderRadius:"10px"}}> 
              <h3 style={{color:"white",marginLeft:"90px"}}>Create New Post</h3>
              <hr/>
              <div style={{position:"relative",marginTop:"50px",marginLeft:"80px"}}>
              <Input className="on-focus" style={{color:"white"}} placeholder='Enter Name'/><br/><br/>
              
              <Button variant="contained" style={{marginLeft:"45px"}} >Submit</Button>
              </div>
              
            </div>
            <span onClick={closeImg1}><X /></span>
          </>
        )}
      </div>
      


        <div className="div1">
          <h1 style={{color:"white"}}>Touch UI</h1>
          <Button className="but" onClick={() => ProfileACtion(1)}>
            <HomeIcon className="comp1" />
            <span>Home</span>
          </Button>
          <br />
          <br />
          <Button className="but" onClick={() => openImg1()}>
            <Search className="comp2" />
            <span>Search</span>
          </Button>
          <br />
          <br />
          <Button className="but" onClick={() => ProfileACtion(3)}>
            <Compass className="comp3" />
            <span>Explore</span>
          </Button>
          <br />
          <br />
          <Button className="but" onClick={() => openImg()}>
            <SquarePlus className="comp4" />
            <span>Create</span>
          </Button>
          <br />
          <br />
          <Button className="but" onClick={() => ProfileACtion(5)}>
            <CircleUserRound className="comp5" />
            <span>Profile</span>
          </Button>
          <br />
          <br />
          <Button className="but" onClick={logout}>
            Logout
          </Button>
        </div>
        <div className="div2">
          <div style={action == 1 ? { display: "block" } : { display: "none" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <div className="div22">
              <Home3/>
              <ActionAreaCard/>
              </div>
              <Home1/>
            </div>
          </div>
          <div style={action == 2 ? { display: "block" } : { display: "none" }}>
            div2
          </div>
          <div style={action == 3 ? { display: "block" } : { display: "none" }}>
            
            <Exploring/>

          </div>
          {/* <div style={action == 4 ? { display: "block" } : { display: "none" }}>
            div4
            <Create/>
          </div> */}
          <div style={action == 5 ? { display: "block" } : { display: "none" }}>
            <div style={{width:"800px"}}><Profile1/></div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
