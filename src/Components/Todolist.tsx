import React, { useCallback } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  BasicModal from './BasicModal';
import { useState } from 'react'
import {TodoI} from './Interface'
import {status} from './Interface'
import {priority} from './Interface'
import Uhash from './Uhash'
import DialogDel from './DialogDel'
import ModalDel from './ModalDel';
import Todo from './Todo';
import DialogStatus from './DialogStatus';
import EditModal from './EditModal';
import {Todoss} from './Interface'
import { useEffect } from 'react';
import { reverse } from 'dns';
import Button , { ButtonProps } from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import DialogSearch from './DialogSearch'
type TodolistProps ={
  onAdd :boolean
  onClose:(Is:boolean)=> void,
  openM :boolean,
  GetDataFromTodoList:(id: number,
    title: string,
    priority: priority,
    datetime: string,
    estimate: number,
    status:status,
    hash:string)=>void,
    GetTodoList:(todoList:Todoss)=>void
}
type sortKeyType = typeof priority[0]
type sortOrderType = 'ascn' |'desc'
const date = new Date();
const formattedDate = date.toLocaleString()
export default function Todolist(props:TodolistProps) {
  const getStorageData = JSON.parse(localStorage.getItem('todos') || '[]')
  const [title, setTitle] = React.useState('');
  const [todoList, setTodoList] = useState<TodoI[]>(getStorageData)
  const [currentTodo, setCurrentTodo] = useState<TodoI>({} as TodoI );
  const [currentTodo1, setCurrentTodo1] = useState<TodoI>({} as TodoI );
  const [currentTodo2, setCurrentTodo2] = useState<TodoI>({} as TodoI );
  const [IsCreate,setIsCreate] = useState(false)
  useEffect(() => {
    const savedItem = localStorage.getItem("todos");
    localStorage.setItem('todos',JSON.stringify(todoList))

  }, [todoList]);



  const SortByTitle = ()=>{
    const CopyTodos=[...todoList]
  const collator = new Intl.Collator(undefined, {
  numeric: false,
  sensitivity: 'base'
  });
 
  CopyTodos.sort((a, b) =>{
    if(a.title > b.title){
      return 1
    }
    if(a.title < b.title){
      return -1
    }
    return 0
  });
  console.log(CopyTodos,'sortByPriority');
  setTodoList([...CopyTodos])
  }
const SortByPriority = ()=>{
  const CopyTodos =[...todoList]
const collator = new Intl.Collator(undefined, {
numeric: true,
sensitivity: 'base'
});
CopyTodos.sort((a, b) => a.priority - b.priority);
console.log(CopyTodos,'sortByPriority');
setTodoList([...CopyTodos])
}
const SortByEstimate = ()=>{
  const CopyTodos =[...todoList]
const collator = new Intl.Collator(undefined, {
numeric: true,
sensitivity: 'base'
});
CopyTodos.sort((a, b) => a.estimate - b.estimate);
console.log(CopyTodos,'sortByEstimate');
setTodoList([...CopyTodos])
}
const SortBystatus = ()=>{
  const CopyTodos =[...todoList]
const collator = new Intl.Collator(undefined, {
numeric: true,
sensitivity: 'base'
});
CopyTodos.sort((a, b) => a.status - b.status);
console.log(CopyTodos,'sortByStatus');
setTodoList([...CopyTodos])
}

  useEffect(() => {
  props.GetTodoList(todoList)
  }, [todoList]);

  const [TitleError, setTitleError] = useState(false);
  const [EstimateError, setEstimateError] = useState(false);
  const [estimateTask,setEstimateTask] =useState(0)

const inputHandle=(event:React.ChangeEvent<HTMLInputElement>,val:string)=>{
  // console.log('event',event.currentTarget.value);
  !event.currentTarget.validity.valid ? setTitleError(true) : setTitleError(false)
  setTitle(val)
}

const EstHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(event.currentTarget.value)
  if(event.currentTarget.value === ''){
    console.log('empty es');
    setEstimateTask(0)
  }
}
const inputEstimateHandle=(event:React.KeyboardEvent<HTMLInputElement>,val:string)=>{

 let numpads =['Numpad0','Numpad1','Numpad2','Numpad3','Numpad4','Numpad5','Numpad6','Numpad7','Numpad8','Numpad9']
 let typedKey =event.code
switch(typedKey){

  case numpads[0]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    
    break
  }
  case numpads[1]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[2]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[3]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[4]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[5]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break

  }
  case numpads[6]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[7]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[8]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  case numpads[9]:{
    setEstimateError(false)
    console.log('type num');
    setEstimateTask(parseInt(event.key))
    break
  }
  default :{
    setEstimateError(true)
    console.log('type text');
    break
  }
}
    
}
const getData = (str1:string,str2:string)=>{
  console.log(estimateTask);
  
  if(title ===''){
    console.log('empty title');
    setTitleError(true)
  }
else{
addTodo(str1,str2,estimateTask)

}

 }
const addTodo = (str1:string,str2:string,estimateTask:number) =>{
  console.log(estimateTask,'estimateTask');
  
  let hash = Uhash()
  console.log('add todo',hash);
  let getindexPriority=0
  let getindexStatus=0

  for(let i=0;i<3;i++){
  if(priority[i] === str1){
    getindexPriority =  i
  }
  }
  for(let j=0;j<=5;j++){
    if(status[j] === str2){
      getindexStatus =  j
    }
    }
  if(title !==''){
    let newTodo={
      id:todoList.length + 1,
      title: title,
      priority:getindexPriority,
      datetime: formattedDate,
      estimate: estimateTask,
      status:getindexStatus,
      hash:hash
    }
    setTodoList([...todoList,newTodo])
  
 
 
  }
    sendDataToApp(todoList.length + 1,title,getindexPriority,
      formattedDate, estimateTask,getindexStatus,hash)
  
      setTitle(' ')
      setEstimateTask(0)
      setIsCreate(true)
      setTimeout(() => {
        props.onClose(false)
        setIsCreate(false)
      }, 1000);
} 

const [openDialogbtn, setOpenDialog] = React.useState(false);
const [openDialogStatus, setOpenDialogStatus] = React.useState(false);
const DialogStatusHandler = (newStatus:string)=>{
  console.log('newStatus',newStatus);
  let index =0
    for(let j=0;j<=5;j++){
      if(status[j] === newStatus){
        index =  j
      }
   }
   let todos = [...todoList]
   console.log(currentTodo1.id,'currentTodo.id');
   console.log(currentTodo1.title,'currentTodo.title');
   console.log(currentTodo1.priority,'currentTodo.priority');
   console.log(currentTodo1.datetime,'currentTodo.datetime');
   console.log(currentTodo1.estimate,'currentTodo.estimate');
   console.log(index,'currentTodo.index');
   
   let newTodo={
    id:currentTodo1.id,
    title: currentTodo1.title,
    priority:currentTodo1.priority,
    datetime: currentTodo1.datetime,
    estimate: currentTodo1.estimate,
    status:index,
    hash:currentTodo1.hash
  }
  let EditedTodo = todos.filter((todo)=>{
    return todo.id !== currentTodo1.id
  })
  setTodoList([...EditedTodo,newTodo])
  sendDataToApp(currentTodo1.id,currentTodo1.title,currentTodo1.priority,
    currentTodo1.datetime, currentTodo1.estimate,index,currentTodo1.hash)
  setOpenDialogStatus(false)
}
const handleCloseDialogStatus = ()=>{
  setOpenDialogStatus(false)
}
const handleClickOpenDialog = () => {
  setOpenDialog(true);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
};
const OpenDialog = (id: number,
  title: string,
  priority: priority,
  datetime: string,
  estimate: number,
  status:status,
  hash:string)=>{
    setCurrentTodo({
      id:id,
      title: title,
      priority:priority,
      datetime: datetime,
      estimate: estimate,
      status:status,
      hash:hash
    }) 
  handleClickOpenDialog()
}
const openDelModal= ()=>{
  console.log('opent del modal');
  
}
const [openModalDel, setOpenModalDel] = React.useState(false);
const handleOpenModalDel = () => {
  console.log('currentTodo',currentTodo);
  setOpenModalDel(true);
}
const handleCloseModalDel = () =>
  {
    setOpenModalDel(false);
  } 
const DialogHandler = ()=>{
  handleOpenModalDel()
}
const [InnerhashID,setHashID] = useState('')
const [hashIDError,sethashIDError] = useState(false)
const [TextHashEror,setTextHashEror] = useState('')
const [IsSuccessDelete,setIsSuccessDelete] = useState(false)

const handleHashID = (event:React.ChangeEvent<HTMLInputElement>)=>{
  setHashID(event.currentTarget.value)
  if(event.currentTarget.value=== ''){
    console.log('emptyy');
    setTextHashEror('please enter your HashID')
    sethashIDError(true)
  }
  else{
    sethashIDError(false)
  }
}
const DeleteTask = (text:string)=>{
  let Todos = [...todoList]
  let currentTask = currentTodo
  let hashID = currentTask.hash
  let id =currentTask.id
  console.log(InnerhashID,'typed hashid');
  console.log(hashID,'main hashID');
if(InnerhashID === '')
{
  setTextHashEror('please enter your HashID')
  sethashIDError(true)
}
 if(hashID === text){
  sethashIDError(false)
  setIsSuccessDelete(true)
    console.log('you can delete this task');
    console.log(hashID,'hashID');
    console.log(text,'text');
  
    let newTodo = Todos.filter(todo=>{
      return id !== todo.id
  })
  setTodoList([...newTodo])
  setTimeout(() => {
    setOpenModalDel(false);
    setOpenDialog(false);
  }, 1000);

  }
else if(InnerhashID !== ''){
  sethashIDError(true)
  setTextHashEror('HashID is not correct')
  console.log('you can not delete this task');
}

}
const EditTask = (id: number,
  title: string,
  priority: priority,
  datetime: string,
  estimate: number,
  status:status,
  hash:string)=>
  {
    setCurrentTodo1({
      id:id,
      title: title,
      priority:priority,
      datetime: datetime,
      estimate: estimate,
      status:status,
      hash:hash
    }) 
    console.log('id',id);
    console.log('title',title);
    console.log('priority',id);
    console.log('datetime',datetime);
    console.log('estimate',estimate);
    console.log('status',status);
    console.log('hash',hash);
    console.log('currentTodo',currentTodo1);
    // DialogStatusHandler()
    setOpenDialogStatus(true)
  }


  const [titleTodo, setTitleTodo] = useState('');
  const [estimateTodo, setEstimateTodo] = useState(0);
  const [priorityTodo, setPriorityTodo] = useState('');
  const [statusTodo, setStatusTodo] = useState('');
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoEstimate, setNewTodoEstimate] = useState(0);

const GetDataTodoEdit=(id: number,
  title: string,
  Priority: priority,
  datetime: string,
  estimate: number,
  Status:status,
  hash:string)=>{
  setCurrentTodo2({
    id:id,
    title: title,
    priority:Priority,
    datetime: datetime,
    estimate: estimate,
    status:Status,
    hash:hash
  }) 
  setTitleTodo(title)
  setNewTodoTitle(title)
  setEstimateTodo(estimate)
  handleEditModalOpen()
}
 const FocusHandlerEditInput1 = ()=>{
  setTitleTodo('')
 } 
 const FocusHandlerEditInput2 = ()=>{
  setEstimateTodo( 0)
 } 

  const NewEditTodoTitle = (val:string)=>{
setNewTodoTitle(val)

  }
const NewEditTodoestimate = (val:string)=>{
  setNewTodoEstimate(parseInt(val))
 }
const EditedTodo = (str1:string,str2:string)=>{
let todos = [...todoList]
setPriorityTodo(str1)
setStatusTodo(str2)
let indexPriority =0
let indexStatus =0
for(let j=0;j<=2;j++){
  if( priority[j]=== str1){
    indexPriority = j
    
  }
}
for(let j=0;j<=5;j++){
  if( status[j]=== str2){
    indexStatus = j
  }
}
console.log('priorityTodo',str1,indexPriority);
console.log('statusTodo',str2,indexStatus);
let EditTodo={
 id:currentTodo2.id,
 title: newTodoTitle,
 priority:indexPriority,
 datetime:currentTodo2.datetime,
 estimate:newTodoEstimate,
 status:indexStatus,
 hash:currentTodo2.hash
}

let EditedTodo = todos.filter((todo)=>{
 return todo.id !== currentTodo2.id
})
console.log('EditedTodo',EditedTodo);

setTodoList([...EditedTodo,EditTodo])
setTitleTodo('')
setNewTodoTitle('')
setPriorityTodo('')
setStatusTodo('')
sendDataToApp(currentTodo2.id,currentTodo2.title,indexPriority,
  currentTodo2.datetime, currentTodo2.estimate,indexStatus,currentTodo2.hash)
handleCloseEditModal()
}

const [EditModalOpen, setEditModalOpen] = useState(false);
const handleEditModalOpen = () => setEditModalOpen(true);
const handleCloseEditModal = () => setEditModalOpen(false);

const sendDataToApp = (id: number,
  title: string,
  Priority: priority,
  datetime: string,
  estimate: number,
  Status:status,
  hash:string)=>{
  props.GetDataFromTodoList(id,title,Priority,datetime,estimate,Status,hash)
  
}
const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  gap:'.5em',
  margin:'1em 0 1em auto',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
 const [OpenSearchDialog,setOpenSearchDialog]=useState(false)
 const OpenSearchHandler = ()=>{
  setOpenSearchDialog(true)
 }
 const CloseSearchHandler =(is:boolean)=>{
  setOpenSearchDialog(is)
  setSearch('')
 }
 const [search,setSearch]=useState('')

 const FilteredData = (query:string)=>{
  setSearch(query)
 }
  return (
    <div className='TableC'>
       <BootstrapButton variant="contained" disableRipple onClick={OpenSearchHandler}>
        Search
       <SearchIcon/>
      </BootstrapButton>
      <BasicModal onOpenModal={props.onAdd} openM={props.openM}  estimateTask={estimateTask} IsCreate={IsCreate}
      titleTask={title} TitleError={TitleError} EstHandler={EstHandler}
       EstimateError={EstimateError}
       onClose={props.onClose} inputState={inputHandle} getData={getData} inputEstimateHandle={inputEstimateHandle}/>
   <TableContainer component={Paper}>
      <Table sx={{ backgroundColor:'#00000' }} aria-label="todo list">
        <TableHead>
          <TableRow>
            <TableCell onClick={SortByTitle}>Title</TableCell>
            <TableCell align="right" onClick={SortByPriority}>Priority</TableCell>
            <TableCell align="right">Date Time</TableCell>
            <TableCell align="right" onClick={SortByEstimate}>Estimate (h)</TableCell>
            <TableCell align="right" onClick={SortBystatus}>status</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.filter((item)=>{
             return search.toLowerCase() === '' ? item:item.title.toLowerCase().includes(search)
          }).map((row) => (
            <Todo {...row} op={OpenDialog} key={row.hash} EditStatus={EditTask} EditTableRow ={GetDataTodoEdit}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <DialogDel OpenDialog={OpenDialog} isOpen={openDialogbtn} CloseDialog={handleCloseDialog} DialogHandler={DialogHandler}/>
    <ModalDel openDelModal={openModalDel} hashIDError={hashIDError} handleHashID={handleHashID} TextHashEror={TextHashEror}
     InnerhashID={InnerhashID} CloseModalDel={handleCloseModalDel} deleteTask={DeleteTask} IsSuccessDelete={IsSuccessDelete}/>
    <DialogStatus isOpenStatus={openDialogStatus} DialogStatusHandler={DialogStatusHandler} 
    CloseDialogStatus={handleCloseDialogStatus}/>

    <EditModal CloseEditModal={handleCloseEditModal} isOpenEditModal={EditModalOpen} FocusHandlerEditInput2={FocusHandlerEditInput2}
      FocusHandlerEditInput1={FocusHandlerEditInput1} PriorityTodo={priorityTodo} NewEditTodo={NewEditTodoTitle} NewEditTodoestimate={NewEditTodoestimate}
    titleCurrentTodo={titleTodo} estimateCurrentTodo={estimateTodo}  EditedTodo={EditedTodo}/>

    <DialogSearch  OpenSearchDialog={OpenSearchDialog} CloseSearchHandler={CloseSearchHandler} FilteredData={FilteredData}/>
    </div>

  )
}
