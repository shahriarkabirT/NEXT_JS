import getAllPost from '@/lib/getAllPost'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
    const posts = await getAllPost();
  return (
    <>
    {posts.map(post => 
    <li key={post.id}> <Link href={`posts/${post.id}`}>{post.title}</Link>
    </li> )}
    </>
  )
}
