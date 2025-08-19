"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import React, { useState } from 'react'

function VidLink() {
  const [url, setUrl] = useState<string>(""
  );
  const [link, setLink] = useState("")
  const [process, setProcess] = useState(false)
  const createLink = useMutation(api.SharedVid.createLink)

  const onCreateLink = async () => {
    const res = await createLink({ link:url })
    if (res) {
      const fullUrl = window.location.href + "activity/" + res;
      setLink(fullUrl)
    }

  }

  return (
    <div className='p-2 '>
      <div className='p-2 flex flex-row'>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="paste  in URL of youtube video" className="self-center rounded-r-none mx-auto my-auto border-2 w-full" />
        <Button onClick={onCreateLink} className='rounded-l-none'>Get Link</Button>
      </div>
      <span>

        {link}
      </span>
    </div>
  )
}

export default VidLink

