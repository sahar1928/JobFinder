import React from 'react'
import Banner2 from '../Banner/Banner2'
import JobSearchTab from '../Job Search/JobSearchTab'
import Category2 from '../Category Area/Category2'
import FeaturedJobs from '../Jobs/FeaturedJobs'
import WorkArea from '../Work Area/WorkArea'
import SignIn from './SignInMain'
import FeaturedCandidate from '../Candidates/FeaturedCandidate'
import BlogArea from '../Blog Area/BlogArea'
import JobSearchHero from '../Job Search/JobSearchHero'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Banner2/>
        <JobSearchHero/>
        <JobSearchTab/>
        <Category2/>
        <FeaturedJobs/>
        <WorkArea/>
        <FeaturedCandidate/>
        <BlogArea/>
        <SignIn/>
    </main>
  )
}

export default HomePageMain2