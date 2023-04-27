function User({ user }) {
  return (
    <>
      <p>{user.name} - {user.email}</p>
      <p>{user.address.street}</p>
      <p>{user.address.city}</p>
      <p>{user.address.geo.lat}</p>
      <p>{user.address.geo.lng}</p>
    </>
  )
}

export default User