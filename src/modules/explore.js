import { Heart, MessageCircle } from "lucide-react";
import "./style.css";
import { useState } from "react";

function Exploring(){
    const arr=[
        {
            "name":"abhi_jadav",
            "img":"https://tse1.mm.bing.net/th?id=OIP.Us3vornr4pB02KFIC55WZwHaFF&pid=Api&P=0&h=220",
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
        },
        {
            "name":"abhi_jadav",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"abhi_jadav",
            "img":"https://tse1.mm.bing.net/th?id=OIP.Us3vornr4pB02KFIC55WZwHaFF&pid=Api&P=0&h=220",
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
        },
        {
            "name":"abhi_jadav",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
            "tag":"#photos",
            "like":"300"
        },
        {
            "name":"abhi_jadav",
            "img":"https://tse1.mm.bing.net/th?id=OIP.Us3vornr4pB02KFIC55WZwHaFF&pid=Api&P=0&h=220",
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
        },
        {
            "name":"abhi_jadav",
            "img":"http://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
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
        <div className="exmain">
        <div className="full-img" style={{ display: openImage !== null ? "flex" : "none" }}>
        {openImage !== null && (
          <>
            <img src={arr[openImage].img} id="fullImg" alt="Full Size" />
            <span onClick={closeImg}>X</span>
          </>
        )}
      </div>
        <div className="explore">
            {
                arr.map((val,index)=>(
                    
                        <>
                        <div key={index} className="exdiv1">
                            <img src={val.img} style={{height:"280px",width:"310px"}} onClick={()=>openImg(index)}/>
                        
                        </div>
                        </>
                    )
                )
            }
            
            
        </div>
         
        </div>
        </>
    )
}
export default Exploring;