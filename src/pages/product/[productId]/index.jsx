import React from 'react'

// Extract parameter from the URL
import { useRouter } from 'next/router'

const ProductDetail = () => {

    //Initialize router 
    const router = useRouter()
    //Extract and Assign parameter
    const productId = router.query.productId

    return (
        <h1>Details about the product {productId}</h1>
    )
}

export default ProductDetail