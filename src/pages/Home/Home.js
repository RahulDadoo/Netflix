import React from 'react'
import './Home.css'
import Navbar from '../../Components/navbar/Navbar'
import Feature from '../../Components/features/Feature'
import List from '../../Components/list/List'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Feature type={"movies"}></Feature>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
    </div>
  )
}

export default Home