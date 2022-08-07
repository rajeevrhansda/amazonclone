import React from 'react'
import './subtotal.css'
import {useStateValue} from '../../StateProvider'
import { getBasketTotal } from '../../reducer'



const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            
                <p>
                    Subtotal ({basket?.length} items): <strong>${getBasketTotal(basket)}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox" /> This order contains a gift
                </small>
                
            

            
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal







// <CurrencyFormat
// renderText={(value) =>(
//     <>
//     <p>
//         Subtotal ({basket?.length} items): <strong>{value}</strong>
//     </p>
//     <small className='subtotal__gift'>
//         <input type="checkbox" /> This order contains a gift
//     </small>
//     </>
// )}

// decimalScale={2}
// value={getBasketTotal(basket)}
// displayType={'text'}
// thousandSeparator={true}
// prefix={"$"}
// />