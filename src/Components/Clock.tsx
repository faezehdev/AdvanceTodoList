import React from 'react'
import { FcAlarmClock } from "react-icons/fc";
import '../App.css'
import { useState } from 'react'
export default function Clock() {
  let currentDate  = new Date()
  let time  = new Date()
  const [Hours,setHours] = useState(time.getHours())
  const [Minutes,setMinutes] = useState(time.getMinutes())
  const [Seconds,setSeconds] = useState(time.getSeconds())

  // const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    let time  = new Date()
    setHours(time.getHours())
    setMinutes(time.getMinutes())
    setSeconds(time.getSeconds())
  }
  setInterval(UpdateTime,100)
  return (
    <div className='clock-container'>
      <FcAlarmClock />
      <div className="det">
      <span className="Dates">{new Date().getFullYear()}/{new Date().getMonth()}/{new Date().getDate()}</span>
        <span>-</span>
        <span className="Times">{Hours}</span>
        <span>:</span>
        <span className="Times">{Minutes}</span>
        <span>:</span>
        <span className="Times">{Seconds}</span>

      </div>
      </div>
  )
}

