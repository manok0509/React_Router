import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Products() {
    const { number } = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <nav>
                <Link to='/products/1'>Iphone</Link>|
                <Link to='/products/2'>Ipad</Link>|
                <Link to='/products/3'>haha</Link>
            </nav>
            <p>Product:{number}</p>
            <button onClick={() => navigate(`/checkout/${number}`)} >Buying</button>
        </div>
    )
}

export default Products
