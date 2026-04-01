import React from 'react'
import { useParams } from 'react-router-dom'

function Checkout() {
    const { product_id } = useParams()
    return (
        <div>
            <p>Thanh toán thành công: ProductId :{product_id}</p>
        </div>
    )
}

export default Checkout
