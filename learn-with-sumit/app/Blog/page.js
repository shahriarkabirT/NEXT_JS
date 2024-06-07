import Link from "next/link";

const Blog = () => {

const blogs = [
  {
  id:1,
  title:1,
  description:"Blog1",
  },
  {
    id:2,
    title:2,
    description:"Blog2"
  }
]
// const products = [
//   {
//   title:1,
//   description:"Poduct - 1",
//   },
//   {
//     title:2,
//     description:"Product - 2"
//   }
// ]
console.log("Blog Page");

  return (
    <>
    <div className='pt-6'>Blogs</div>
    <hr></hr>
    {blogs.map((blog)=><li key={blog.id}><Link href={`/Blog/${blog.id}`}>{blog.description}</Link></li>)}

    {/* {products.map(product=><ul key={product.id}><Link href={`/blogs/${product.id}`}>{product.description}</Link></ul>)} */}
    </>
  )
}
 
export default Blog

