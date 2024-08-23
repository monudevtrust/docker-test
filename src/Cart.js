import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Cart = () => {
    const { count } = useContext(ThemeContext)
    return (
        <>
        <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h3>items</h3>
            <div>{count}</div>
            </div>
        </>
    )
}

export default Cart;