import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ReciperDisplay = () => {


  const { product } = useSelector((state) => {
    return state
  });



  return (
    <div>

      {
        product.data.length > 0 && product.data.map((product) => {
          return (
            <div className='mx-52 my-20'>
              <h3 className='text-11xl'>{product.name}</h3>
              <p className='text-gray-100 leading-6'>{product.description}</p>
              <Link to={`/recepie/${product.id}`} >Read More</Link>
            </div>
          )
        })
      }

    </div>
  )
}

export default ReciperDisplay