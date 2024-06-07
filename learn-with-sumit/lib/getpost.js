import React from 'react'

export default async function getpost(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return posts.json();
  
}
