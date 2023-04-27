import React from 'react'
import { useRouter } from 'next/router'
const Doc = () => {

    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)

    if (params.length === 2) {
        return (
            <div>Looking at concept {params[1]} and features {params[0]} </div>
        )
    }
    if (params.length === 1) {
        return (
            <div>Looking only at features {params[0]} </div>
        )
    }
    return (
        <div>Docs Home Page </div>
    )
}

export default Doc