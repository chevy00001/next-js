import Link from "next/link"
import { useRouter } from "next/router"
function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log("Placing order.")
    // router.replace("/product")
    router.push("/product")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="blog">
        Blog
      </Link>
      <Link href="product">
        Products
      </Link>
      <Link href="users">
        Users
      </Link>
      <Link href="posts">
        Posts
      </Link>

      <button onClick={handleClick}>Place Order</button>

    </div>

  )

}
export default Home