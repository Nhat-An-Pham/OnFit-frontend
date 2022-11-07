import React from 'react'
import NavUser from '../components/Navbar/NavUser'

const User = () => {
  return (
    <div className='page__user'>
        <NavUser />
        <section className='user__firstSect'>
            <h1>User's name</h1>
            <div className='user__imageSect'>
                <img src='' alt=''/>
            </div>
        </section>
        <section className='user__secondSect'/>
            
        <section>

        </section>
    </div>
  )
}

export default User