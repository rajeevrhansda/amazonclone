import React from 'react'
import './checkout.css'
import {useStateValue} from '../../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import Subtotal from '../subtotal/Subtotal'



const Checkout = () => {

  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your basket is empty</h2>
            </div>
          ):(
            <div>
              <h2 className='checkout__title'>Your shopping basket</h2>
              {basket?.map((item,index) =>(
                <CheckoutProduct key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
        
              ))}
        
            </div>
          )}
      </div>
      {basket?.length > 0 &&(
      <div className='checkout__right'>
        <Subtotal/>
      </div>)}
    </div>
  )
}

export default Checkout