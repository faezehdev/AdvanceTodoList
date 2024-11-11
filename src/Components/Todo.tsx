import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {TodoI} from './Interface'
import {status} from './Interface'
import Button from '@mui/material/Button';
import {priority} from './Interface'
type TodoProps ={
  op:(id: number,
    title: string,
    priority: priority,
    datetime: string,
    estimate: number,
    status:status,
    hash:string)=>void,
  id: number,
  title: string,
  priority: priority,
  datetime: string,
  estimate: number,
  status:status,
  hash:string,
  EditStatus:(id: number,
    title: string,
    priority: priority,
    datetime: string,
    estimate: number,
    status:status,
    hash:string)=>void,
    EditTableRow :(id: number,
      title: string,
      priority: priority,
      datetime: string,
      estimate: number,
      status:status,
      hash:string)=>void

}
const clickHandler = ()=>{
console.log('tess');

}

export default function Todo(props:TodoProps) {
  const OpenDialog = (event:React.UIEvent<HTMLButtonElement>)=>{
    console.log(event);
    event.stopPropagation()
   props.op(props.id,props.title,props.priority,props.datetime,props.estimate,props.status,props.hash)
    
  }
  const clickHandler = ()=>
  {
    
    props.EditStatus(props.id,props.title,props.priority,props.datetime,props.estimate,props.status,props.hash)
    
  }
  const SendEditHandler = (event:React.UIEvent<HTMLButtonElement>)=>{
    event.stopPropagation()
    props.EditTableRow(props.id,props.title,props.priority,props.datetime,props.estimate,props.status,props.hash)
  }
  return (

    // <TableRow  onClick={(event) => {console.log(event.currentTarget); }}>
    <TableRow  onClick={clickHandler}>

         <TableCell component="th" scope="row">
             {props.title}
        </TableCell>
        <TableCell align="right">{priority[props.priority]} </TableCell>
        <TableCell align="right">{props.datetime} </TableCell>
        <TableCell align="right">{props.estimate} </TableCell>
        <TableCell align="right">{status[props.status]} </TableCell>
        <TableCell align="right"><Button variant="contained" 
        onClick={OpenDialog}>Delete</Button> </TableCell>
          <TableCell align="right"><Button variant="contained"  onClick={SendEditHandler}
        >Edit</Button> </TableCell>
        </TableRow>
  )
}
