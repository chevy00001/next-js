import User from '@/components/user'
import React from 'react'

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return {
    props: {
      users: data,
    },
  }
}
const UserList = ({ users }) => {
  return (
    <>
      <div>List of users</div>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          )
        })
      }
    </>

  )
}

export default UserList
