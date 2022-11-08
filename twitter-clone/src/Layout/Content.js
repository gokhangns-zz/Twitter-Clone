import React,{useEffect} from 'react'
import db from '../firebase';

const Content = () => {
  useEffect(()=>{
    db.collection("feed")
  })
  return (
    <main className='bg-blue-500 flex-1'>
      <h1>Content</h1>
      

    </main>
  )
}

export default Content;