import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Category from '../Category Area/Category'
import Jobs from '../Jobs/Jobs'
import Candidates from '../Candidates/Candidates'
import Blog from '../Blog Area/Blog'
import CallToAction from '../Call To Action/CallToAction'

const HomeMain1 = () => {
  return (
    <main className='home-page-1'>
        <Banner/>
        <About/>
        <Category/>
        <Jobs/>
        <Candidates/>
        <Blog/>
        <CallToAction/>
    </main>
  )
}

export default HomeMain1