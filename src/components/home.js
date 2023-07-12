import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
    <div className='container1' >
        <div className='text'>
            Books<span className='span1'>now.</span>
        </div>
        <div>
            <input className='inp-1' type='text' placeholder='search by name, author and genre'></input>
        </div>
    </div>
    </>
  )
}

export default Home
