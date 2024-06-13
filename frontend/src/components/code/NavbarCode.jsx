import React from 'react'
import images from '../../images/codepen.png'
import { useNavigate } from 'react-router-dom'
const NavbarCode = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  }
  return (
    <div
    className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
    <div className="left">
        <div onClick={handleBack} className="logo font-bold text-2xl text-white text-center">
            <img className=' w-44' src={images} alt="" />
        </div>
    </div>
</div>
  )
}

export default NavbarCode
