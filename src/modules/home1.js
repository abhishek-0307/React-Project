import "./style.css";
import { app, db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import {  json, useNavigate } from 'react-router-dom'

function Home1() {
  const auth = getAuth(app);
  const [user, upuser] = useState("");
  const [dataout,setdataout]=useState("");
  const [buttonStates, setButton] = useState({});


  useEffect(()=>{
    onAuthStateChanged(auth,(s)=>
  {
    if(s)
    {
      upuser(s.uid)

    }
  })

  onValue(ref(db,`users/${user}/Username`),(a)=>
  {
    setdataout(a.val())

  })
  },[user,dataout])
 const switchhandle=(userId)=>{
  setButton((prevButtonStates)=>({
    ...prevButtonStates,[userId]:!prevButtonStates[userId]
  }));
 }
 
  
  
  return (
    <>
       <div className="div3">
                <div style={{ display: "flex", flexDirection: "row", gap: "3px" }}>
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "50%",
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <div>
                    <span style={{fontWeight:"500",color:"white"}}>{dataout}</span><br/>
                    <span style={{fontSize:"12px",color:"white"}}>{dataout}</span>
                    
                  </div>
                  <div>
                    <button className="but1" style={{marginLeft:"80px"}} >Switch</button>
                  </div>
                </div>

                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3px" }}
                >
                  <div>
                    <p style={{ color: "white" }}>
                      Suggested for you
                    </p>
                  </div>
                  <button className="but1" style={{ color: "white",marginLeft:"100px",backgroundColor:"black",height:"30px" }}>
                    See All
                  </button>
                </div>

                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3px" }}
                >
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "50%",
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <div>
                  <span style={{fontWeight:"500",color:"white"}}>chintu_patel</span><br/>
                    <span style={{fontSize:"12px",color:"white"}}>Suggested for you</span>
                    
                  </div>
                  <div>
                    <button className="but1" onClick={()=>switchhandle("chintu_patel")}>{buttonStates["chintu_patel"] ? "Requested" : "Follow"}</button>
                  </div>
                </div>
                <br />

                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3px" }}
                >
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "50%",
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <div>
                  <span style={{fontWeight:"500",color:"white"}}>Raju_yadav</span><br/>
                    <span style={{fontSize:"12px",color:"white"}}>Suggested for you</span>
                  </div>
                  <div>
                    <button className="but1" onClick={()=>switchhandle("Raju_yadav")}>{buttonStates["Raju_yadav"] ? "Requested" : "Follow"}</button>
                  </div>
                </div>
                <br />

                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3px" }}
                >
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "50%",
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <div>
                  <span style={{fontWeight:"500",color:"white"}}>surya_jadav</span><br/>
                    <span style={{fontSize:"12px",color:"white"}}>Suggested for you</span>
                  </div>
                  <div>
                    <button className="but1" onClick={()=>switchhandle("surya_jadav")}>{buttonStates["surya_jadav"] ? "Requested" : "Follow"}</button>
                  </div>
                </div>
                <br />

                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3px" }}
                >
                  <div
                    style={{
                      border: "2px solid black",
                      borderRadius: "50%",
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <div>
                  <span style={{fontWeight:"500",color:"white"}}>amjad_md</span><br/>
                    <span style={{fontSize:"12px",color:"white"}}>Suggested for you</span>
                  </div>
                  <div>
                    <button className="but1" onClick={()=>switchhandle("amjad_md")}>{buttonStates["amjad_md"] ? "Requested" : "Follow"}</button>
                  </div>
                </div>
              </div>
    </>
  );
}
export default Home1;
