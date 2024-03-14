import { Link } from 'react-router-dom'
import WomanImg from '../assets/women-hero.png'

const Hero = () => {
  return (
    <section className='bg-[#EEBC23] h-[796px] bg-hero bg-no-repeat bg-cover bg-center py-24 font-secondary uppercase text-terciary'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* Text */}
        <div className='flex flex-col justify-center'>
          <div className='flex items-center'>
            <div className='w-10 h-[2px] bg-secondary mr-3'></div>
            Últimas Ofertas
          </div>
          <h1 className='text-[65px] leading-[1] mb-4'>
            Rebajas <br />
            <span className=''>de verano</span>
          </h1>
          <div className='flex items-center justify-start gap-x-6'>
            <Link
              className='bg-[#FCC85D] py-2 px-4 rounded-lg text-xl before:ease relative overflow-hidden text-terciary shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-terciary before:duration-300 hover:text-[#FCC85D] hover:shadow-terciary hover:before:h-64 hover:before:-translate-y-32'
              to='/'
            >
              <span className='relative z-10'>Solo online</span>
            </Link>
            <div className='text-center'>
              <h4>hasta un</h4>
              <h3 className='text-[65px] leading-[1]'>70%</h3>
              <h4>de descuento</h4>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='Imagen mujer de compras' />
        </div>
      </div>
    </section>
  )
}

export default Hero
