import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Clock from './Components/Clock';
import AddButton from './Components/AddButton';
import TodoChart from './Components/TodoChart';
import Todolist from './Components/Todolist';
import {status} from './Components/Interface'
import {priority} from './Components/Interface'
import { useState } from 'react'
import './App.css'
import {Todoss} from './Components/Interface'
import { useEffect } from 'react';

 function App() {
  const [open, setOpen] = useState(false);
  const [TodoCounter, setTodoCounter] = useState<Todoss>([] as Todoss);
  const [DoingCounter, setDoingCounter] = useState<Todoss>([] as Todoss);
  const [DoneCounter, setDoneCounter] =useState<Todoss>([] as Todoss)
  const [WarningCounter, setWarningCounter] = useState<Todoss>([] as Todoss)
  const [PendingCounter, setPendingCounter] = useState<Todoss>([] as Todoss)
  const [FaildCounter, setFaildCounter] = useState<Todoss>([] as Todoss)
  useEffect(() => {
   console.log(TodoCounter.length);
   
    }, [TodoCounter]);
const handleOpen = () => {
  setOpen(true)
};
const handleClose = () => {
  setOpen(false)
}
const GetDataFromTodoList = (id: number,
  title: string,
  priority: priority,
  datetime: string,
  estimate: number,
  status:status,
  hash:string)=>{
}

const GetTodoList = (todoList:Todoss)=>{
  console.log('change todolisttt',todoList);
  let todos = [...todoList]
  let TodoCount = todos.filter(item=>{
   return item.status === 0
  })
  setTodoCounter([...TodoCount])

  let DoinCount = todos.filter(item=>{
    return item.status === 1
   })
   setDoingCounter([...DoinCount])

   let DoneCount = todos.filter(item=>{
    return item.status === 2
   })
   setDoneCounter([...DoneCount])

   let WarningCount = todos.filter(item=>{
    return item.status === 3
   })
   setWarningCounter([...WarningCount])

   let PendingCount = todos.filter(item=>{
    return item.status === 4
   })
   setPendingCounter([...PendingCount])

   
   let FaildCount = todos.filter(item=>{
    return item.status === 5
   })
   setFaildCounter([...FaildCount])

}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
      sx={{width:'100%',
      display:'flex',
       flexDirection:'column',
      direction:'rtl'}} 
       maxWidth={false}>
        <h1>
           Todo List App
        </h1>
      <div className="Row">
         <Clock />
         <AddButton onAdd={handleOpen} />
      </div>
      <TodoChart TodoCount={TodoCounter} DoingCount={DoingCounter}  DoneCount={DoneCounter} WarningCount={WarningCounter}
      PendingCount={PendingCounter}   FaildCount={FaildCounter}/>
      <Todolist openM={open} onAdd={open} onClose={handleClose} GetTodoList={GetTodoList} GetDataFromTodoList={GetDataFromTodoList}/>
      </Container>
    </React.Fragment>
  );
}

export default App;
