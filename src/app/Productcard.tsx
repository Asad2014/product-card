
import React from 'react'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
      <div className="w-full flex flex-col items-center">
        <Image 
          src="/perfumes.jpg" 
          width={350} 
          height={200} 
          alt="Perfume bottle" 
        />
        <p className="text-center py-2 font-semibold">Perfume</p>
        <p className="text-center py-2 text-lg">Rs. 1000</p>
        <button 
          className="text-white bg-blue-600 py-1 px-8 rounded-sm">
          Buy Now
        </button>
      </div>

      
      <div className="w-full flex flex-col items-center">
        <Image 
          src="/watch.jpg" 
          width={350} 
          height={200} 
          alt="Luxury watch" 
        />
        <p className="text-center py-2 font-semibold">Watch</p>
        <p className="text-center py-2 text-lg">Rs. 800</p>
        <button 
          className="text-white bg-blue-600 py-1 px-8 rounded-sm">
          Buy Now
        </button>
      </div>

      
      <div className="w-full flex flex-col items-center">
        <Image 
          src="/caps.jpg" 
          width={350} 
          height={200} 
          alt="Fashion cap" 
        />
        <p className="text-center py-2 font-semibold">Cap</p>
        <p className="text-center py-2 text-lg">Rs. 500</p>
        <button 
          className="text-white bg-blue-600 py-1 px-8 rounded-sm">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductCard







