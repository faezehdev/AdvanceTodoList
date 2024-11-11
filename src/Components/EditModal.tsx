import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import  {TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
type EditModalProps ={
    isOpenEditModal:boolean,
    CloseEditModal: ()=>void,
    titleCurrentTodo :string,
    estimateCurrentTodo:number,
    FocusHandlerEditInput1:()=>void,
    FocusHandlerEditInput2:()=>void,
    PriorityTodo:string,
    NewEditTodo:(val:string)=> void
    NewEditTodoestimate:(val:string)=> void
    EditedTodo:(str1:string,str2:string)=>void
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal(props:EditModalProps) {

  const handleClose = () =>{
    props.CloseEditModal()
  }

  
  const [editedPriority,setEditedPriority] =useState('LOW')
  const [editedStatus,setEditedStatus] =useState('TODO')

  const EditPriority = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setEditedPriority(event.currentTarget.value)
  }
  
  const EditStatus = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setEditedStatus(event.currentTarget.value)
  }
  const sendDataTodo = ()=>{
    props.EditedTodo(editedPriority,editedStatus)
    setEditedPriority('LOW')
    setEditedStatus('TODO')
  }

 const OnFocusHandler1 = ()=>{
  props.FocusHandlerEditInput1()
    
 }
 const OnFocusHandler2 = ()=>{
    props.FocusHandlerEditInput2()
      
   }
  return (
    <div>
      <Modal
        open={props.isOpenEditModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
          <TextField sx={{width:'100%'}}  label={props.titleCurrentTodo} onFocus={OnFocusHandler1} variant="outlined" 
          name='todo' margin="normal"
          onChange={(event:React.ChangeEvent<HTMLInputElement>)=>props.NewEditTodo(event.currentTarget.value)} />

         <TextField sx={{width:'100%'}}  label={props.estimateCurrentTodo}   onFocus={OnFocusHandler2}
        onChange={(event:React.ChangeEvent<HTMLInputElement>)=>props.NewEditTodoestimate(event.currentTarget.value)} 
          variant="outlined"
        name='estimate' margin="normal"/>
          <Box sx={{width:'100%',display:'flex',justifyContent:'space-around',margin:'0 auto'}}>
          <Box>
              <FormControl>
                  <FormLabel id='priority-buttons-group'>
                    <Typography >
                      select Priority:
                    </Typography >
                  </FormLabel>
                  <RadioGroup 
                  name="priority" 
                  aria-labelledby='priority-buttons-group' 
                  onChange={EditPriority}
                  value={editedPriority}
                  defaultValue={editedPriority} >  
                  <FormControlLabel  control={<Radio  color="primary"   checked={editedPriority === 'LOW'}
                   />} value='LOW' label='LOW' />
                  <FormControlLabel control={<Radio color="primary"  checked={editedPriority === 'MEDIUM'}
                   />}  value='MEDIUM'label='MEDIUM' />
                  <FormControlLabel control={<Radio color="primary"  checked={editedPriority === 'HIGHT'}
                   />}  value='HIGHT' label='HIGHT' />
                    </RadioGroup>
              </FormControl>
             </Box>
             <Box>
              <FormControl>
                  <FormLabel id='status-buttons-group'>
                    <Typography >
                      select status:
                    </Typography >
                  </FormLabel>
                  <RadioGroup 
                  aria-labelledby='status-buttons-group' 
                  onChange={EditStatus}
                  value={editedStatus}
                defaultValue={editedStatus} 
                   name='status'>
                     <FormControlLabel control={<Radio color="secondary" checked={editedStatus === 'TODO'} />}  label='TODO' value='TODO'/>
                     <FormControlLabel control={<Radio color="secondary" checked={editedStatus === 'DOING'} />}  label='DOING' value='DOING'/>
                     <FormControlLabel control={<Radio color="secondary" checked={editedStatus === 'DONE'}/>}  label='DONE' value='DONE'/>
                     <FormControlLabel control={<Radio color="secondary"checked={editedStatus === 'WARNING'}  />}  label='WARNING' value='WARNING'/>
                     <FormControlLabel control={<Radio color="secondary" checked={editedStatus === 'PENDING'} />}  label='PENDING' value='PENDING' />
                     <FormControlLabel control={<Radio color="secondary" checked={editedStatus === 'FAILD'} />}  label='FAILD' value='FAILD' />
                  </RadioGroup>
              </FormControl>
             </Box>
          </Box>
            

          <Button onClick={sendDataTodo}
          sx={{backgroundColor:'blueviolet',marginRight:'auto',marginTop:'.8em'}}
           variant="contained">Add Todo</Button>
        </Box>
      </Modal>
    </div>
  );
}