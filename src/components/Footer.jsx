import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <p className='text-white text-center'>
          Ecommerce 2024 realizado con React y TailwindCSS. <br /> Hecho con
          cariño por Flor ♥
        </p>
        <div className='flex items-center justify-center gap-x-2 mt-4'>
          <Link
            to='https://github.com/FlorPManzano/ecommerce-shop'
            target='_blank'
          >
            <FaGithub className='text-white text-2xl' />
          </Link>
          <Link to='https://www.linkedin.com/in/florpmanzano/' target='_blank'>
            <FaLinkedin className='text-white text-2xl' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
