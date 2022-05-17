import React from 'react'
import WorkCard from '../components/WorkCard'

function work() {
  return (
    <div class="work-container">
      <div class="header">header</div>
      <div className='grid grid-cols-3 gap-4'>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  )
}

export default work