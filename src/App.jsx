import React from "react"
import { useEffect, useState } from "react"

function App() {

  const [showPost, setshowPost] = useState()
  const apiUrl = "https://api.sr.se/api/v2/channels?format=json&size=100";

let displayData

async function radioplayer() {
  const response = await fetch(apiUrl)
  const responseData = await response.json()
  console.log(responseData)

  displayData = responseData.channels.map(function (radio) {
    return (
      <div key={radio.id} className="bg-green-500 pb-6">
        <div
          className="flex ">
          <img src={radio.image} className="w-24"></img>
          <div className="flex flex-col pb-2 pr-2" style={{backgroundColor: `#${radio.color}`}}>
            <p className="text-2xl pl-6 pb-2 pt-1 ">{radio.name}</p>
            <audio controls src={radio.liveaudio.url}></audio>
          </div>
        </div>
      </div>
    );
  })
  setshowPost(displayData)
}

    useEffect(() => {
      radioplayer()
    }, []);

  return (
    <div className="">
 
   {showPost} 

    </div>
  )
}

export default App
