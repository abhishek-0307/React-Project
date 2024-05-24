// import { Settings } from "lucide-react";
// import "./style.css";
// import { app, db } from "./firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { onValue, ref, set } from "firebase/database";
// import { useEffect, useState } from "react";

// function Profile1(){
//   const auth = getAuth(app);
//   const [user, upuser] = useState("");
//   const [dataout,setdataout]=useState("");
//   const[data,updata]=useState([]);

//   useEffect(()=>{
//     onAuthStateChanged(auth,(s)=>
//   {
//     if(s)
//     {
//       upuser(s.uid)

//     }
//   })

//   onValue(ref(db,`users/${user}/Username`),(a)=>
//   {
//     setdataout(a.val())

//   })
//   },[user,dataout])

//   useEffect(()=>
//   {
//     onValue(ref(db,`users/${user}/posts`),(a)=>
//     {
//       updata(a.val())

//     })
    

//   },[])
//   console.log(data);
//     return(
//         <>
       
//             <div className="profileImg">
//               <img
//                  src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
//                 // src={data[0].img}
//                 style={{ height: "100%", width: "100%", borderRadius: "50%" }}
//               ></img>
//             </div>
//             <div className="profiledata">
//                   <span>{dataout}</span>
//                   <button className="pbut" >Edit Profile</button>
//                   <button className="pbut" >View archive</button>
//                   <span><Settings /></span>
//             </div>
//             <div style={{position:"absolute",marginLeft:"320px",marginTop:"10px",color:"white"}}>
//               {/* <span>8 posts</span> */}
//               <span style={{marginLeft:"30px"}}>400 followers</span>
//               <span style={{marginLeft:"30px"}}>455 following</span>
//             </div>
//             <div style={{position:"relative",marginTop:"100px",marginLeft:"150px"}}>
//             <h2 style={{color:"white"}}>posts</h2>
//             <div>
              
                
//                      {
//                       data && 
//                       data.map((val,index)=>{
//                         return(
//                           <>
//                           <div style={{height:"200px",width:"200px",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
//                               <img src={data.img} height="200px" width="200px" alt="image"></img>
//                           </div>
//                           </>
//                         )
//                       })
//                     }
                

              
//             </div>
           
//             </div>
        
//         </>
//     )
// }
// export default Profile1;
import { Settings } from "lucide-react";
import "./style.css";
import { app, db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

function Profile1() {
  const auth = getAuth(app);
  const [user, upuser] = useState("");
  const [dataout, setdataout] = useState("");
  const [data, updata] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        upuser(user.uid);

        // Fetch user's display name
        onValue(ref(db, `users/${user.uid}/Username`), (snapshot) => {
          const username = snapshot.val();
          setdataout(username || ""); // Set the username in state
        });

        // Fetch user's posts
        onValue(ref(db, `users/${user.uid}/posts`), (snapshot) => {
          const posts = snapshot.val() || [];
          updata(posts); // Set the posts array in state
          setIsLoading(false); // Set loading state to false
        });
      }
    });
  }, [auth]);

  return (
    <>
      <div className="profileImg">
        {/* Display profile picture */}
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220"
          style={{ height: "100%", width: "100%", borderRadius: "50%" }}
          alt="Profile"
        />
      </div>
      <div className="profiledata">
        {/* Display user's display name */}
        <span>{dataout}</span>
        <button className="pbut">Edit Profile</button>
        <button className="pbut">View archive</button>
        <span>
          <Settings />
        </span>
        <div style={{ position: "relative", marginLeft: "10px", marginTop: "10px", color: "white" }}>
        {/* Display follower and following counts */}
        <span style={{ marginLeft: "30px" }}>400 followers</span>
        <span style={{ marginLeft: "30px" }}>455 following</span>
      </div>
      </div>
      
      <div style={{ position: "relative", marginTop: "100px", marginLeft: "150px" ,width:"700px"}}>
        <h2 style={{ color: "white" }}>Posts</h2>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {/* Display user's posts */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            
            <>
            {data.length === 0 ? ( // Check if user has no posts
              <p style={{color:"white"}}>No posts. Create posts!</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {/* Display user's posts */}
                {data.map((post, index) => (
                  <div key={index} style={{ height: "200px", width: "200px", margin: "10px" }}>
                    <img src={post.img} height="200px" width="200px" alt={`Post ${index}`} />
                  </div>
                ))}
              </div>
            )}
          </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile1;
