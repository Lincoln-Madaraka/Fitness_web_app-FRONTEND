import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ARecepie = () => {

    const { id } = useParams();

    const { product } = useSelector((state) => {
        return state
    });

    const receipe = product.data.filter((product)=>{
            return product.id == id;
    })

    console.log(receipe);

    return (
        <div>ARecepie</div>
    )
}

export default ARecepie