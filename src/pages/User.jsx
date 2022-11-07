import React from 'react'
import NavUser from '../components/Navbar/NavUser'

const User = () => {
  return (
    <div className='page__user'>
      <NavUser />
      <section className='user__firstSect'>
        <h1>Hi User's name</h1>
        <div className='user__firstSect__personalInfo'>

        </div>
      </section>
      <section className='user__secondSect'>
        <div className='user__secondSect__bodyStats'>

        </div>
      </section>

      <section className='user__thirdSect'>
        <div className='user__secondSect__courses'>

        </div>
      </section>
    </div>
  )
}

export default User