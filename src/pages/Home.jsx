import React from 'react'
import Main from "../components/Main/Main";
import GymProgram from "../components/GymProgram/GymProgram";
import Member from "../components/Member/Member";
import Classes from "../components/OurClasses/Classes";
import Schedule from "../components/Schedule/Schedule";
import Trainer from "../components/Trainers/Trainers";
import Contact from '../components/Contact/Contact';
import HomeContent from '../components/HomeContent/HomeContent';

const Home = () => {
    return (
        <div className='Home'>
            <Main />
            {/* <GymProgram />
                <Member />
                <Classes />
                <Schedule />
            <Trainer /> */}
            <HomeContent />
            <Contact />
        </div>
    )
}

export default Home