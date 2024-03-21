import { useState, useContext, useEffect } from 'react'

import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  return (
    <header
      className={`${
        isActive ? 'bg-white/80 shadow-md' : 'bg-none'
      } fixed w-full z-20 transition-all py-4`}
    >
      <div className='container mx-auto flex items-center justify-between h-full px-4'>
        {/* Logo */}
        <Link to={'/'}>
          <div className='flex items-center justify-center font-terciary text-5xl text-terciary relative'>
            <Logo
              color={`${isActive ? '#121212' : '#663B36'}`}
              width='80'
              height='80'
            />
            <p
              className={`${
                isActive ? 'text-primary' : 'text-terciary'
              } absolute left-12 bottom-5`}
            >
              Larana
            </p>
          </div>
        </Link>

        {/* Cart */}
        <div
          className='cursor-pointer flex relative'
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag
            className={`${
              isActive ? 'text-primary' : 'text-terciary'
            } text-3xl`}
          />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px]  w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
