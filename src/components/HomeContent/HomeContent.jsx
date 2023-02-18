import React from 'react';

const HomeContent = () => {
    return (
        <div className='HomeContent__container'>
            <div className='HomeContent__wrapper'>
                <div className='HomeContent__box'>
                    <img src={require("../../assets/images/homeContent/BodyCombat.jpeg")} alt='bodyCombat' />
                    <h3>Body Combat</h3>
                    <span>BodyCombat is a high-energy martial arts-inspired workout that is totally 
                        non-contact. </span>
                </div>
                <div className='HomeContent__box'>
                    <img src={require('../../assets/images/homeContent/BodoBuilding.jpeg')} alt='' />
                    <h3>Body Building</h3>
                    <span>Bodybuilding is the use of progressive resistance exercise to control and 
                        develop one's muscles</span>
                </div>
                <div className='HomeContent__box'>
                    <img src={require("../../assets/images/homeContent/BodyCombat2.jpeg")} alt='bodyCombat2' />
                    <h3>Body Combat</h3>
                    <span>BodyCombat is a high-energy martial arts-inspired workout that is totally 
                        non-contact.</span>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;