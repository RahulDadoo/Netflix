import React, { useState } from 'react'
import './Listitem.css'
import { Add, PlayArrow ,ThumbUpOutlined,ThumbDownOffAltOutlined} from '@mui/icons-material'

const Listitem = (index) => {
    const [isHovered , setisHovered] = useState(false);
    //const trailer = "https://www.youtube.com/embed/mljj92tRwlk"
  return (
    <div className='listitem' style={{left: isHovered && index.index * 225 + index.index * 2.5}} onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}>
        <img src='https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt=''></img>
        {isHovered && (
        <>
        {/* <video src="https://www.youtube.com/embed/mljj92tRwlk" title="#Gadar2 Official Trailer | 11th August | Sunny Deol | Ameesha Patel | Anil Sharma | Zee Studios" autoPlay={true} loop></video> */}
        <iframe width="100%" height="140px" src="https://www.youtube.com/embed/mljj92tRwlk?autoplay=1" allow="autoplay" frameborder="0" title="ABC"    ></iframe>
           <div className='iteminfo'>
            <div className='icons'>
                <PlayArrow className='icon'></PlayArrow>
                <Add className='icon'></Add>
                <ThumbUpOutlined className='icon'></ThumbUpOutlined>
                <ThumbDownOffAltOutlined className='icon'></ThumbDownOffAltOutlined>
            </div>
            <div className='itemInfotool'>
                <span >1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>1999</span>
             </div>
                <div className='desc'>
                Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world,
                </div>
                <div className='genre'>Action</div>
        </div>
        </>)}
        
    </div>

  )
}

export default Listitem