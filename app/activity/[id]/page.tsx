import React from 'react'
import Video from '../components/Video'

async function page({params}:{params:Promise<{id:string}>}) {
const p = await params
    
console.log(p.id," Id")
return (
    <div className='min-h-screen flex flex-1'>
    
    <Video id={p.id}/>
    </div>
  )
}

export default page