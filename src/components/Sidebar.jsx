import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { useContext } from 'react'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  return (
    <div
    className={`${isOpen ? 'right-0' : '-right-full'} 
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Cesta (0)</div>
        {/* Icon */}
        <div
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
          onClick={handleClose}
        >
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
