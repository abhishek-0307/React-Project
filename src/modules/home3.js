import { useState } from "react";
import "./style.css";


function Home3(){
    const arr=[
        {
            "name":"abhi_jadav",
            "img":"https://tse1.mm.bing.net/th?id=OIP.Us3vornr4pB02KFIC55WZwHaFF&pid=Api&P=0&h=220",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"sai_teja_1",
            "img":"https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"Rahul_123",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"pradeep_k",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"vishal_mdk",
            "img":"https://tse1.mm.bing.net/th?id=OIP.Us3vornr4pB02KFIC55WZwHaFF&pid=Api&P=0&h=220",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"raju_yadav",
            "img":"https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"depu_nayak",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"chinni_patel",
            "img":"https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"arthy_rathod",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"abhi_jadav",
            "img":"https://tse3.mm.bing.net/th?id=OIP.YamThAfETQJZRHNHwcjeCAHaE7&pid=Api&P=0&h=220",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"abhi_jadav",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
            "tag":"#photos",
            "like":"300"
        }
    ]
    const [openImage,SetOpenImage]=useState(null);
    const closeImg=()=>{
        SetOpenImage(null);
    }
    const openImg=(index)=>{
        SetOpenImage(index);
    }
    return(
        <>
        <div className="full-img1" style={{ display: openImage !== null ? "flex" : "none" }}>
        {openImage !== null && (
          <>
            <div style={{position:"absolute",marginTop:"-380px",marginLeft:"-460px"}}>
                <img src={arr[openImage].img} style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
                <h3 style={{color:"white",position:"absolute",marginLeft:"50px",marginTop:"-40px"}}>{arr[openImage].name}</h3>
            </div>
            <img src={arr[openImage].img} id="fullImg" alt="Full Size" />
            <span onClick={closeImg} >X</span>
          </>
        )}
      </div>
        <div className="home3">
        {
            arr.map((val,index)=>{
                return(
                    <div>
                    <div key={index} style={{borderRadius:"50%",height:"60px",width:"60px",border:"3px solid rgb(226, 63, 91)"}}>
                        <img src={val.img} style={{borderRadius:"50%",height:"55px",width:"55px",padding:"3px"}} onClick={()=>openImg(index)}></img>
                    </div>
                    <div><span style={{fontSize:"10px",marginLeft:"-10px",color:"white"}}>{val.name}</span></div>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Home3