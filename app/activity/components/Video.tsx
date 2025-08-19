"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Reflection from "./Reflection";

const Video = ({id}:{id:string}) => {
  const [url, setUrl] = useState("");
  
  const [pip, setPip] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [controls, setControls] = useState(false);
  const [light, setLight] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [loop, setLoop] = useState(false);
  const [seeking, setSeeking] = useState(false);

  console.log(id," id")
  const playerRef = useRef(null);

  const info = useQuery(api.SharedVid.get,{id:id as Id<"SharedVid">})
  
  const handleStop = () => {
  
    setPlaying(false);
  //ask for summary.      
  //ask to add a habit.
  };

useEffect(()=>{

  console.log(info)
info?.link ? setUrl(info.link):null

},[info])
  const handlePlay = () => setPlaying(true);
  const handlePause = () => setPlaying(false);
  const handleSeekMouseUp = (val: number) => {
    setSeeking(false);
    // @ts-ignore
    playerRef?.current?.seekTo(val);
  };

  const handleProgress = (state: any) => {
    if (!seeking) {
      setPlayed(state.played);  
      setLoaded(state.loaded);
    }
  };



  useEffect(() => {

    if (played !== 0) {


      handleSeekMouseUp(played)
    }



  }, []);

  return (
    <div className="flex flex-1  w-full h-full ">

      <div className="w-full h-full flex ">
        {url !== "" ?
          <div className="flex flex-col gap-2 p-2 w-full">
            <ReactPlayer
              ref={playerRef}
              className=" aspect-video"
              width="100%"
              height="100%"
              src={url}
              // pip={pip}
              playing={playing}
              controls={true}
              // light={light}
              // loop={loop}
              // playbackRate={playbackRate}
              // volume={volume}
              // onReady={() =>setPlaying(true)}
              //  onStart={() => console.log("onStart")}
              onPlay={handlePlay}
              onPause={handlePause}
              // onEnablePIP={() => setPip(true)}
              // onDisablePIP={() => setPip(false)}

              // onPlaybackRateChange={setPlaybackRate}
              // onSeek={(e) => console.log("onSeek", e)}
              onEnded={handleStop}

              // onError={(e) => console.log("onError", e)}
              onProgress={handleProgress}
            // onDuration={handleDuration}
            />
            
          </div>
          :
         <></>
        }
      </div>

<Reflection/>

    </div>



  );
};

export default Video;
