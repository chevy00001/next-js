import React from 'react'
import { useRouter } from 'next/router'
const Review = () => {

    const router = useRouter()

    // Destructure query
    const { productId, review } = router.query
    return (
        <div>{productId} - {review}</div>
    )
}

export default Review