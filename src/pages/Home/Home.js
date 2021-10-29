import React from 'react'
import Banner from '../../components/Banner/Banner'
import Rides from '../../components/Rides/Rides'

const Home = () => {
    return (
        <div className="container md:w-5/6 mx-auto">
            <Banner />
            <Rides/>
        </div>
    )
}

export default Home
