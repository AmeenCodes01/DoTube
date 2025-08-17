"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function VidLink() {
  const [url, setUrl] = useState<string>(""
  );

  return (
    <div className='p-2'>
      <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="paste in URL of youtube video" className="self-center mx-auto my-auto border-2 w-full" />
      <Button>Get Link</Button>
    </div>
  )
}

export default VidLink

