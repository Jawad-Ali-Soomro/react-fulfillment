import React , {useState} from 'react'
import Logo from './Logo'

const MobileMenu = () => {
  const [mobile , setMobile] = useState(false)
  return (
    <div className='header mobile'>
        <Logo />
        <i className="uil uil-bars menu-btn" onClick={() => setMobile(true)}></i>
       {
        mobile == true ? <>
         <div className="mobile-menu">
          <div className="main-menu">
            <div className="main-top">
              <Logo />
              <i className="uil uil-multiply" onClick={() => setMobile(false)}></i>
            </div>
          </div>
        </div>
        </> : this
       }
    </div>
  )
}

export default MobileMenu