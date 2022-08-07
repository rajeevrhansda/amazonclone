import React from 'react'
import './products.css'

import {useStateValue} from '../../StateProvider'


const Products = ({ id, title, price, rating, image }) => {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                // id: id,
                // title: title,
                // image: image,
                // price: price,
                // rating: rating
                // ==OR==
                id,
                title,
                image,
                price,
                rating
            }
        })

    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,index) => (<p key={index}>🌟</p>))}
                </div>
            </div>
            <img src={image} alt="Product thumbnail" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Products