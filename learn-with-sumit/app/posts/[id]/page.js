import getpost from '@/lib/getpost';
import React from 'react'

export default async function Postpage({params}) {
    const {id} = params;
    const post = await getpost(id);
    console.log(post);
    return (<>
    <div>
        <h2 className='p-5'>{post.title}</h2>
        <h4 className='p-5'>{post.body}</h4>
    </div>
    </>
  )
}
