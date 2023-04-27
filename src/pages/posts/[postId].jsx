import React from 'react'


const Post = ({ post }) => {

    return (
        <>
            <div>Post</div>
            <h2>{post.title}</h2>
        </>
    )
}

export default Post

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const path = data.map(post => {
        return {
            params: { postId: `${post.id}` }
        }
    })
    return {
        paths: path,
        fallback: false
    }
    // return {
    //     paths: [
    //         {
    //             params: { postId: '1' },
    //         },
    //         {
    //             params: { postId: '2' },
    //         },
    //         {
    //             params: { postId: '3' },
    //         }

    //     ],
    //     fallback: false
    // }
}
export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}