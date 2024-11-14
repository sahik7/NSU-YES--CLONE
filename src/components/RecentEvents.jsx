import React from 'react'
import HomeEvents from './HomeEvents'
import Brochures from './Brochures'

function RecentEvents() {
  return (
    <div className='my-14 font-poppins'>
    <div className='grid md:grid-cols-2'>
    <HomeEvents/>
    <Brochures/>
    </div>
    </div>
  )
}

export default RecentEvents