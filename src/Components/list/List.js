import React, { useRef, useState } from 'react'
import './List.css'
import {ArrowBackIosNewOutlined,ArrowForwardIosOutlined} from '@mui/icons-material'
import Listitem from '../listitem/Listitem'

const List = () => {
    const [ismoved , setismoved] = useState(false)
    const [countscroll , setcountscroll] = useState(0)
    const listRef = useRef()
    const handleClick = (direction)=>{
        setismoved(true)
        let distance = listRef.current.getBoundingClientRect().x;
        if(direction === "left" && countscroll>0)
        {
            setcountscroll(countscroll-1)
            listRef.current.style.transform = `translateX(${230 + distance }px)`
        }
        if(direction === "right" && countscroll<5)
        {
            setcountscroll(countscroll+1)
            listRef.current.style.transform = `translateX(${-230 + distance }px)`
        }
    }
  return (
    <div className='list'>
       <span className='listtitle' >Continue to watch</span>
       <div className='Wrapper'>
          <ArrowBackIosNewOutlined className='sliderArrow left' onClick={()=>handleClick("left")} style={{display:!ismoved && "none"}}></ArrowBackIosNewOutlined>
          <div className='container' ref={listRef}>
            <Listitem index={0}></Listitem>
            <Listitem index={1}></Listitem>
            <Listitem index={2}></Listitem>
            <Listitem index={3}></Listitem>
            <Listitem index={4}></Listitem>
            <Listitem index={5}></Listitem>
            <Listitem index={6}></Listitem>
            <Listitem index={7}></Listitem>
            <Listitem index={8}></Listitem>
            <Listitem index={9}></Listitem>
          </div>
          <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}></ArrowForwardIosOutlined>
       </div>
    </div>
  )
}

export default List