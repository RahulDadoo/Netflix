import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import './Watch.css'

const Watch = () => {
  return (
    <div className='Watch'>
        <div className='back'>
            <ArrowBack></ArrowBack>
            Home
        </div>
        <iframe width="100%" height="140px" src="https://www.youtube.com/embed/mljj92tRwlk?autoplay=1" allow="autoplay" frameborder="0" title="ABC" allowfullscreen   ></iframe>
    </div>
  )
}

export default Watch