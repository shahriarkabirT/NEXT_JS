import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
    const{id} = params;
    console.log(params);
    if(id == 2){
        var myText = "I am Tashin"
    }
    else if(id==1){
        var myText = "I am Machoman"
    }
    else{
        notFound();
    }
  return (
    <>
    {myText}
    </>
  )
}
