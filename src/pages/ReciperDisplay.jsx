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
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={`/recepie/${product.id}`} >Read More</Link>
            </div>
          )
        })
      }

    </div>
  )
}

export default ReciperDisplay