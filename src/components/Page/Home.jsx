import React from 'react'
import Welcome from '../welcome.jpg'
function Home() {
    return (
        <div>
            <img src={Welcome} alt="welcome" className='w-100 mt-5 me-1' />

        </div>
    )
}

export default Home