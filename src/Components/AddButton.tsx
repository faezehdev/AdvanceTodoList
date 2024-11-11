import React from 'react'
import { FcPlus } from "react-icons/fc";
import { useState } from 'react'
import '../App.css'
type AddButtonProps ={
  onAdd : ()=> void
}
export default function AddButton(props:AddButtonProps) {
  let add = ()=>{
    props.onAdd()
  }
  return (
    <div>
      <button className='AddTodo' onClick={add}>
      <FcPlus />
      </button>
    </div>
  )
}
