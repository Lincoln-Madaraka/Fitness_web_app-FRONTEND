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

    const dish = receipe[0];
    console.log(dish.ingredients);

    return (
        <div className='flex h-screen mx-10 md:flex-row md:justify-center items-strech'>
            <div className='w-1/4 m-10'>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            </div>
           
            <img src={dish.image} className='w-1/4 m-10 rounded-lg'/>

            <div className='w-1/2 m-10'>
            <h2>Ingredients</h2>
            <ul>
                {dish.ingredients.map(element =>{
                    return <li>{element.name}</li>
                })}
            </ul>

            <h2>Steps:</h2>
            <ol>
                {
                    dish.steps.map(element =>{
                        return <li>{element}</li>
                    })
                }
            </ol>

            </div>
            
        </div>
    )
}

export default ARecepie