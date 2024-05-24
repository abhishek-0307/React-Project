import React, { useEffect, useState } from 'react'
import {PhoneAuthProvider, RecaptchaVerifier, createUserWithEmailAndPassword, getAuth, linkWithCredential, onAuthStateChanged, signInWithPhoneNumber} from 'firebase/auth'
import "../App.css"
import { Button, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { app } from './firebase'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { getDatabase, ref, set } from 'firebase/database'
function Reg() {
  const auth=getAuth(app)
  const [uname, unameupdate] = useState({
    Email:"",
    Username: "",
    Phone: "",
    Password: "",
    Gender: "",
    Dob: "",
    country: "",
    otp:""

  });
  const [res,upres]=useState(null);
  const[otp,Updotp]=useState(false);
  const db=getDatabase(app);
  const sig = useNavigate();
  const [userid,getuid]=useState("");

  useEffect(()=>
  {

    // if(user)
    // {
    //   console.log(user);
    //    getuid(user.uid)
    // }


  },[])


  // useEffect(() => {
  //   if (!userid) {
  //     console.log("User ID not available yet.");
  //     return; // Exit if user ID is not available
  //   }
  
  //   // User ID is available, proceed with pushing data
  //   const pushUserData = async () => {
  //     try {
  //       const { Username, Phone, Password, Gender, Dob, country, Email } = uname;
  //       const userData = { Username, Phone, Password, Gender, Dob, country, Email };
  //       console.log(userData);
  
  //       await set(ref(db, `/users/${userid}`), userData);
  //       console.log("User data pushed to Firebase");
  //       sig("/"); // Redirect after successful sign up
  //     } catch (error) {
  //       console.error("Error pushing user data:", error);
  //     }
  //   };
  
  //   pushUserData(); // Call the function to push user data
  // }, [userid]); // Watch for changes in userid
  

  const fetchuser=()=>
  {
    
     onAuthStateChanged(auth,(v)=>{
      if(v){
        const pushUserData = async () => {
          try {
            const { Username, Phone, Password, Gender, Dob, country, Email } = uname;
            const userData = { Username, Phone, Password, Gender, Dob, country, Email };
            console.log(userData);
      
            await set(ref(db, `/users/${v.uid}`), userData);
            console.log("User data pushed to Firebase");
            sig("/")
                 // Redirect after successful sign up
          } catch (error) {
            console.error("Error pushing user data:", error);
          }
        };
      
        pushUserData();



      }
    })
  }


  useEffect(() => {
    if (res !== null) {
      singUP(); // Call singUP function when res is updated
    }
  }, [res]); // Watch for changes in 


  const singUP = async() => {
    try{


     // await res.confirm(uname.otp)
      //console.log("otp verified");
     await createUserWithEmailAndPassword(auth,uname.Email,uname.Password)
     console.log("email verified");

     const modphone=uname.Phone.slice(3)+"@gmail.com";
  
      await createUserWithEmailAndPassword(auth,modphone,uname.Password)
    //  console.log("email verified with phone");
     
       
      const {Username,Phone,Password,Gender,Dob,country,Email}=uname;
      const abhi={Username,Phone,Password,Gender,Dob,country,Email};
      console.log(abhi)
      //fetchuser();
      fetchuser();

      //set(ref(db,`/users/${userid}`),abhi).then(()=>console.log("success"));
    
      
      
    } 
    catch{
      console.log("errgyor")
    }
   
  }
  const SignIn=()=>{
    sig("/");
  }
  const UpdateOtp=async()=>{
    try{
      const captcha=new RecaptchaVerifier(auth,"recaptcha",{}) 
      const verify=await signInWithPhoneNumber(auth,uname.Phone,captcha)
     
      console.log(verify);
      upres(verify)
    }
    catch{
      console.error("hyuy");
    }
    Updotp(true);


  }
  const getOtp=(val)=>{
    unameupdate({...uname,otp:val.target.value})
  }
  const usemail = (val) => {
    unameupdate({ ...uname, Email: val.target.value });
  }
  const userName = (val) => {
    unameupdate({ ...uname, Username: val.target.value });
  }
  const usephn = (val) => {
    unameupdate({ ...uname, Phone: val })
  }
  const usepwd = (val) => {
    unameupdate({ ...uname, Password: val.target.value })
  }
  const UseGen = (val) => {
    unameupdate({ ...uname, Gender: val.target.value })
  }
  const useDob = (val) => {
    unameupdate({ ...uname, Dob: val.target.value })
  }
  const useCountry = (val) => {
    unameupdate({ ...uname, country: val.target.value })
  }
  console.log(uname);
  return (
    <>
      <div style={{display:"flex",flexDirection:"row",gap:"10px",padding:"20px",backgroundColor:"black"}}>
      <div style={{marginLeft:"100px"}}>
        
        <img src='https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/c9/87/6b/c9876b2e-99d7-2e30-b8e4-298a1ed132ab/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg' style={{height:"400px",width:"400px",borderRadius:"100%",marginTop:"100px"}}></img>

      </div>
      <div style={{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center",flexDirection:"column",marginLeft:"60px"}}>
        <h1 className='h1reg'>Touch UI</h1><br/>
        <Input onChange={usemail} placeholder='Enter Email' className='regbgc'/><br/>
        <Input onChange={userName} placeholder='Enter UserName' className='regbgc'/><br />
        <Input onChange={usepwd} placeholder='Enter Password' className='regbgc'/><br />
        <Input placeholder='Enter Confirm Password' className='regbgc'/><br/>
        <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
        <Input onChange={UseGen} type="radio" id="Male" name="Gender" value="male" className='regbgc' />
        <FormLabel for="male" className='regbgc'>Male</FormLabel><br></br>
        <Input onChange={UseGen} type="radio" id="Female" name="Gender" value="female" className='regbgc'/>
        <FormLabel for="female" className='regbgc'>Female</FormLabel><br></br>
        <Input onChange={UseGen} type="radio" id="Other" name="Gender" value="other" className='regbgc'/>
        <FormLabel for="other" className='regbgc'>Other</FormLabel><br></br>
        </div><br/>
        <Input onChange={useDob} type='date' placeholder='Enter DOB' className='regbgc'/><br />
        <Input onChange={useCountry} placeholder='Enter Country' className='regbgc'/><br /><br />
        
        
        <div style={{ position: 'relative', backgroundColor: 'black' }}>

        <PhoneInput className="phnin" onChange={(val) => usephn("+"+val)}
          country={'in'} value={uname.Phone} 
          containerStyle={{ backgroundColor: 'black' }}
          inputStyle={{ backgroundColor: 'black',color:"white" }}
          buttonStyle={{ backgroundColor: 'black' }}
          dropdownStyle={{ backgroundColor: 'black' }}
          placeholder="Enter your phone number"
        />
        </div>
        
        
        <Button variant="contained" onClick={UpdateOtp} >Send OTP</Button>
        {
          !otp &&  <div id='recaptcha'></div>
        }
       
        {
  
          otp && <><br/><Input onChange={getOtp} placeholder='enter otp'className='regbgc'/></>
        }
        <br /><br />

        <Button variant="contained" onClick={singUP}>Sign In</Button><br />
        <p style={{color:"white"}}>Have an Account?</p>
        <Button variant="contained" onClick={SignIn}>Login In</Button><br />
      </div>
      </div>
    </>

  )
}

export default Reg