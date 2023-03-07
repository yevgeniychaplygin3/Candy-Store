import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useProducts from '../hooks/useProducts'
import { receiveProducts, cartVisiblity, CartVisibility,  
        addProduct, removeProduct, checkoutCart
    } from '../redux/actions'
import { getProducts, getCart, getCartVisibility } from '../redux/selectors'
import '../styles/styles.css'
import styled from '@emotion/styled/macro'

const Cart = styled.div`
    float: right;
    margin: 20px;
    margin-right: 90px;
    top: 0;
    padding: 5px;
    background-color:${props => props.visibility ? ' #cae8ca;' : 'white' };
    border: 2px solid ${props => props.visibility ? '#4CAF50' : 'none' };
    width: auto;
    
`

export function ShowCart(){
    const cart = useSelector(getCart)
    const dispatch = useDispatch()
    var visibility = false
    if (cart.length === 1) visibility = false
    else visibility = true

    return (
        
    <div className=''>
        <Cart visibility={visibility}>

        {cart.length === 1 ? "": <h3>Cart({cart.length-1})</h3>}
        
        <ul> {cart.map(
            item => (
                (Object.keys(item).length === 0 || item.id === 0) ? "" :
                <div key={item.id}>
                <li>
                    <p className="list-group-item" id='name'>{item.name} <span className="badge">{item.inCart}</span></p>
                    <p className="list-group-item">${item.pricePerUnit} each</p>
                    <p className="list-group-item">Total cost: ${item.totalCost.toFixed(2)}</p>
                </li> 
                <button className='btn btn-danger  btn-sm' onClick={() => {dispatch(removeProduct(item.id, item.inCart))}}>Remove item</button>
                </div>
            )
        )}</ul>
        {cart.length === 1 ? "": <button className='btn btn-success' onClick={() => {dispatch(checkoutCart(cart))}}>Checkout ({cart.length-1})</button>}
        </Cart>
    </div>
    )
}


function Product(products){
    const [ quantity, setQuantity ] = useState(0)
    const dispatch = useDispatch()

    return (
        <div className='products'>
            <p>{products.name}</p>
            <p>${products.price} each</p>
            <p>{products.inStock} in stock</p>
            <p id='url'>{products.photoUrl}</p>
            <img className="img-responsive" src={products.photoUrl} width="304" height="236" alt={products.name}></img>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(addProduct(products.id, quantity, products.name, products.price))
                dispatch(cartVisiblity(CartVisibility.SHOW_CART))
                setQuantity("")
            }}>
                <input type="number" value={quantity} placeholder='0' min="0" onChange={(e) => setQuantity(e.target.value) }/>
                <button className='btn btn-info' disabled={products.inStock < 1 || quantity === 0 || quantity> products.inStock}>{products.inStock < 1 ? "Out of Stock" : "Add to Cart"}</button>
                {quantity > products.inStock ? <p className="alert alert-danger" id='error'>Not enough in stock</p>: "" }
            </form>
        </div>
    ) 
}


function ProductsList(){
        const { products} = useProducts()
        const dispatch = useDispatch()

        useEffect(()=>
        {
            dispatch(receiveProducts(products))

        }, [products])


        const prod = useSelector(getProducts)
        return(
            <>
                <div className='p'>
                    {
                        prod.map(p=> <Product key={p.id} {...p}/>)
                    }
                </div>
                <div >
                    {useSelector(getCartVisibility) === CartVisibility.SHOW_CART ?  <ShowCart/> : ""}
                </div>
            </>
        )
}

export default ProductsList