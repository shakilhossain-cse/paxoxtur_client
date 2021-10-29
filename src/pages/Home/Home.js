import React from 'react'
import Banner from '../../components/Banner/Banner'
import Feedback from '../../components/Feedback/Feedback'
import Patners from '../../components/Patners/Patners'
import Rides from '../../components/Rides/Rides'

const Home = () => {
    return (
        <div className="container md:w-5/6 mx-auto">
            <Banner />
            <Rides />
            <Feedback />
            <Patners/>
        </div>
    )
}

export default Home
