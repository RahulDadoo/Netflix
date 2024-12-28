import React from 'react'
import './Feature.css'
import {PlayArrow,InfoOutlined} from '@mui/icons-material'

 const Feature = ({type}) => {
  return (
    <div className='features'>
        {type && (<div className='category'>
            <span>{type === "movies"?"Movies":"Series"}</span>
            <select name='grnre' id='genre'>
                <option>Genre</option>
                <option value={"adventure"}>Adventure</option>
                <option value={"comedy"}>Comedy</option>
                <option value={"crime"}>Crime</option>
                <option value={"fantansy"}>Fantansy</option>
                <option value={"historical"}>Historical</option>
                <option value={"horror"}>Horror</option>
                <option value={"romance"}>Romance</option>
                <option value={"sci-fi"}>Sci-fi</option>
                <option value={"thriller"}>Thriller</option>
                <option value={"western"}>Western</option>
                <option value={"animation"}>Animation</option>
                <option value={"drama"}>Drama</option>
                <option value={"documentary"}>Documentary</option>
            </select>
        </div>)}
        <img src='https://images.unsplash.com/photo-1682417844065-07961597146e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt=''></img>
        <div className='info'>
            <img src='' alt=''></img>
            <span className='desc'>
            Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena
            </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrow></PlayArrow>
                    <span>play</span>
                </button>
                <button className='moreinfo'>
                    <InfoOutlined></InfoOutlined>
                    <span>info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
export default Feature
