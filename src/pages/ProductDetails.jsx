import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Import contexts
import { ProductContext } from '../contexts/ProductContext'
import { CartContext } from '../contexts/CartContext'

const ProductDetails = () => {
  // Get id from params
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  // Find de product by id
  const product = products.find((item) => item.id === parseInt(id))

  if (!product) {
    return (
      <section className='h-screen flex items-center justify-center'>
        Cargando...
      </section>
    )
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { title, price, description, image } = product

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img
              className='max-w-[200px] lg:max-w-sm'
              src={image}
              alt={title}
            />
          </div>
          {/* Text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
              {price} €
            </div>
            <p className='mb-8'>{description}</p>
            <button
              className='bg-primary py-4 px-8 text-white'
              onClick={() => addToCart(product, product.id)}
            >
              Añadir a la cesta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
