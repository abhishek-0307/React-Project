import "./style.css";
import react, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Button, TextField } from '@mui/material';
import { Bookmark, EllipsisVertical, Heart, MessageCircle, Navigation, Send, ShareIcon } from "lucide-react";
import Home3 from "./home3";
import { onValue, ref, set,push } from "firebase/database";
import { Favorite } from "@mui/icons-material";
import { app, db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function ActionAreaCard() {
    const auth = getAuth(app);
    const [datout,upput]=useState([]);
    const[newComment,setnewComment]=useState([]);
    const [commentIndex, setCommentIndex] = useState(false);
    const [user, upuser] = useState("");
    const [username, upuserma] = useState("");
    const [data,updata]=useState([]);
    const[bgColor,setBgcolor]=useState( []);
    const [likeCounts, setLikeCounts] = useState( []); // Initialize like counts with default value
    const [original,setoriginal]=useState([]);
    const [displayComment,setdispalayComment]=useState({});
    const [commentData,setcommentData]=useState("");
    const [openImage,SetOpenImage]=useState(null);
    const [usernames, setUsernames] = useState({});
    useEffect(()=>
  {

    onAuthStateChanged(auth,(s)=>
    {
      if(s)
      {
        upuser(s.uid)
       
      }
    })

    onValue(ref(db,`users/${user}/Username`),(a)=>
    {
      // console.log("sdfvg")
      // console.log(a.val());
      updata(a.val())
    })

    // displaycomment
    onValue(ref(db,`comments`),(a)=>{
      const comt=a.val();
      setdispalayComment(comt)
    })
    

 
    //console.log("vsudgbequid");
    onValue(ref(db,`posts`),(a)=>
    {
      if(a.val())
      {
        const posts=a.val();

      upput(Object.values(posts).reverse())
      setoriginal(Object.values(posts))
      setBgcolor(Array(posts.length).fill(false));

      setnewComment(posts.map(() => ({ comment: '' })));


      
      posts.map((v,i)=>
      {
        if(v.like)
        {
          bgColor[i]=true
        }
        else
        {
          bgColor[i]=false;
        }
      })


      }
      else
      upput(null)
    });

    ///added data
    onValue(ref(db, 'users'), (snapshot) => {
      const usersData = snapshot.val();
      const usernames = {};
      for (let userId in usersData) {
        usernames[userId] = usersData[userId].Username;
      }
      setUsernames(usernames);
    });
    //upto


  },[user])////changed the value empty array to user

  useEffect(()=>
  {
    onValue(ref(db,`users/${user}/posts`),(a)=>
    {
      updata(a.val())

    })
    

  },[bgColor])
  
  
    
    
   
    
     //const [count,setCount]=useState(0);
    
    const handleBgColor=(index)=>{


      const updatedPosts = [...datout];
      const updatedBgColor = [...bgColor];

      if(!updatedBgColor[index])
      {
        updatedPosts[index] = { ...updatedPosts[index], like:updatedPosts[index].like+1  };
      
      }
      else
      {

        updatedPosts[index] = { ...updatedPosts[index], like: updatedPosts[index].like-1  };

      } 
      // updatedBgColor[index] = !updatedBgColor[index];
  // Update bgColor based on like status
      updatedBgColor[index] = !updatedBgColor[index]; // T
      setBgcolor(updatedBgColor);

  upput(updatedPosts);
  // console.log(Object.values(updatedPosts).reverse());
  // console.log("enddddddd")
  //set(ref(db,`posts`),Object.values(updatedPosts).reverse());

    }
    
    const closeImg=()=>{
        SetOpenImage(null);
    }
    const openImg=(index)=>{
     
      //console.log(index)
     SetOpenImage(index);
    const commentsForPost = Object.values(displayComment).map((comment) => comment[index]);
    //setcommentData(commentsForPost);
    const extractedComments = commentsForPost.map((comment) => {
      const [text, userId] = comment.split('#');
      return { text, userId };
    });
    setcommentData(extractedComments);

     //chnaged the data from
      // console.log("displaycomment");
      // const te=Array(displayComment.length).fill(Object.keys(displayComment));
      // console.log(te)
      //  console.log(displayComment[te[0][2]]);

      //  var  finalcomment=[];
      //  for(var i=0;i<te.length;i++)
      //   {
      //     for(var j=0;j<te[0].length;j++)
      //       {
      //         finalcomment.push( displayComment[ te[0][j]]);


      //       }
      //   }
      //   console.log("uioilkl")
      //   console.log(finalcomment);

      //   const aaq=finalcomment.map((v,i)=>
      //   {
      //     return v[index].split("#")[0];
      //   })

      //   console.log("uioilkg7wiudjl");
      //   console.log(aaq);
      //   setcommentData(aaq);
      //   console.log("comment data stored i usestate");
      //   console.log(commentData);

      // chnaged data upto here

      // for(var obj of displayComment){
      //   console.log(`Name: ${obj}`);
      // }

    }
    const postComment=(e)=>{
      e.preventDefault();

      // console.log("sijoqdwkdgjbweubicakdb")
      // console.log(newComment)

      const a=newComment.map((v,i)=>
      {
        return v.comment+"#"+user;
      })
      // console.log(a);
      // console.log("ppppp")
      const updatea=()=>
        {
         // set(ref(db, `comments`), asd);
          alert("syucees")
 
        }
       
      
        console.log("comment function");
        console.log(original);
        var aaaaa=newComment.reverse();

         const asd=original.map((v,i)=>
         {
          v.comment=aaaaa[i].comment +"#"+user;
        })

         console.log(asd);
        // updatea()
         const commentsRef = ref(db, `comments`);

        // // Push the new comment data to Firebase under the comments node
         const newCommentRef = push(commentsRef);
         set(newCommentRef, a)
         
        
       
        
        
        
        // const currentTime = Date.now();
        // const commentTime = 1811194820000;
        // const timeDifference = currentTime - commentTime;
        // const minutes =  Math.abs(  Math.floor(timeDifference / (1000 * 60)));

        // const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        // const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // // const hours = Math.floor(minutes / 60);
        // // const days = Math.floor(hours / 24);
        // if (minutes < 60) {
        //   alert( `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`);
        // } else {
          
        //   if (hours < 24) {
        //       alert (`${hours} ${hours === 1 ? "hour" : "hours"} ago`);
        //   } else {
            
        //     alert( `${days} ${days === 1 ? "day" : "days"} ago`);
        //   }
        // }
        ///dwferfn



      
    }
    

    
  return (
    <>
    <div className="scrollable-container">
       
        <br/>
        <br/>
        {
 
        datout  &&
        datout.map((val,index)=>{
                return(
                <>
                {/* for comment */}
                <div className="full-img" style={{ display: openImage !== null ? "flex" : "none" }}>
                {openImage !== null && (
                <>
                  <div style={{height:"370px",width:"350px",backgroundColor:"rgb(45, 42, 42)",borderRadius:"10px"}}> 
                    <h3 style={{color:"white",marginLeft:"120px"}}>Comments</h3>
                    <hr/>
                    <div style={{position:"relative",marginTop:"50px",marginLeft:"40px",overflowX:"hidden",overflowY:"auto"}}>
                      {commentData.map((comment, i) => (
                          <p key={i} style={{ color: "white" }}>
                            {/* {comment} */}
                           
                            <strong>{usernames[comment.userId]}: </strong>
                              {comment.text}
                          </p>
                          ))}

                    </div>
                    
                  </div>
                  <span onClick={closeImg}>X</span>
                </>
        )}
      </div>



                <div>
                <div>
                    <span style={{marginLeft:"-15px"}}><img src={datout[0].img} style={{height:"35px",width:"35px",borderRadius:"50%"}}></img></span>
                    <span style={{position: "relative", top: -12, left: "30px",color:"white"}}>{val.username}</span>
                    <button style={{backgroundColor:"black",border:"transparent",float:"right",cursor:"pointer",color:"white"}}><EllipsisVertical /></button>
                   
                </div>
                <div>
                    <img src={val.img} style={{width:"100%"}}></img>
                </div>
                <div>
                    <button style={{backgroundColor:"black",border:"transparent",cursor:"pointer",color:"white"}} onClick={()=>handleBgColor(index)} >
                        {
                            bgColor[index] ?
                            <Favorite style={{color:"red" }} />
                            :
                            <Heart/>


                        }
                        

                        
                        </button>
                    <button style={{backgroundColor:"black",border:"transparent",cursor:"pointer",color:"white"}} onClick={() => openImg(index)}><MessageCircle/></button>
                    <button style={{backgroundColor:"black",border:"transparent",cursor:"pointer",color:"white"}}><Send /></button>
                    <button style={{backgroundColor:"black",border:"transparent",float:"right",cursor:"pointer",color:"white"}}><Bookmark /></button>
                </div>
                
                    <span style={{position:"relative",marginLeft:"-10px",fontWeight:"600",color:"white"}} >{val.like} likes</span><br/>
                    <span style={{position:"relative",marginLeft:"-10px",fontWeight:"600",color:"white"}}>{val.name}{val.caption}</span><br/>
                    {/* <TextField  placeholder="Add a comment" variant="standard" style={{backgroundColor:"white",color:"red"}} /> */}
                    <form>
                      <input
                        className="post"
                        type="text"
                        placeholder="post comment..."
//                        value={newComment[index]}
                        value={newComment[index].comment}
                        

                        onChange={e=>setnewComment(newComment.map((v, i) => i === index ? { ...v, comment: e.target.value } : v))}
                        style={{color:"red",border:"none",outline:"none",height:"20px"}}
                      />
                      <Button
                        className="postbutton"
                        type="submit"
                        // disabled={commentIndex}
                        onClick={postComment}
                        
                        >
                          Post
                      </Button>
                    </form>
                    
                
                </div><br/>
                    </>
                )
            })
        }
        
    </div>
    </>
  );
}
export default ActionAreaCard;
