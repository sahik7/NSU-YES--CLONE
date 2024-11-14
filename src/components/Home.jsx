import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import AboutUs from './AboutUs'
import Latest from './Latest'
import RecentEvents from './RecentEvents'
import Affiliates from './Affiliates'
import Footer from './Footer'

export const Home = () => {
  return (
    <div>
<Carousel/>
<AboutUs/>
<Latest/>
<RecentEvents/>
<Affiliates/>


    </div>
  )
}
