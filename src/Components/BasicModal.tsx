import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import  {TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import FormControl from '@mui/material/FormControl';
type ModalProps={
  onOpenModal:boolean,
  onClose :(Is:boolean)=> void
  openM:boolean,
  inputState:(event:React.ChangeEvent<HTMLInputElement>,val:string)=> void,
  inputEstimateHandle:(event:React.KeyboardEvent<HTMLInputElement>,val:string)=> void
  TitleError:boolean,
  EstimateError:boolean
  getData :(str1:string,str2:string)=>void
  titleTask:string,
  estimateTask:number
  EstHandler:(event:React.ChangeEvent<HTMLInputElement>)=> void,
  IsCreate:boolean
}
const StyleSuccess ={
  color:'green',
  fontWeight:900,
  textAligh:'center'
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
  display:'flex',
  flexDirection:'column'
};

export default function BasicModal(props:ModalProps) {
const handleClose = () => {
  props.onClose(false)
};
const [selectedd,setSelected] =useState('LOW')
const changePriority = (event:React.ChangeEvent<HTMLInputElement>)=>{
  setSelected(event.currentTarget.value)
}
const [selectedStatus,setSelectedStatus] =useState('TODO')
const changeStatus = (event:React.ChangeEvent<HTMLInputElement>)=>{
  setSelectedStatus(event.currentTarget.value)
} 
const sendDataTodo = ()=>{ 
  props.getData(selectedd,selectedStatus)
}
const EstHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(event.currentTarget.value)
  if(event.currentTarget.value === ''){
    console.log('empty es');
  }

}

  return (
    <div>
      <Modal
        open={props.onOpenModal}
        onClose={handleClose}>
        <Box sx={style}>
          {/* todo input */}

       
          <TextField 
           error={props.TitleError}
          helperText={props.TitleError ? "please fill..." : ""}
           sx={{width:'100%'}} id="outlined-basic" required label="please type todo..." variant="outlined" value={props.titleTask}
          onChange={(event:React.ChangeEvent<HTMLInputElement>)=>props.inputState(event,event.currentTarget.value)} name='todo' margin="normal"/>

         <TextField sx={{width:'100%'}} id="outlined-basic-one" required label="please enter estimate..."
          error={props.EstimateError}
          helperText={props.EstimateError? "please type number" : ""}   
         onChange = {(event:React.ChangeEvent<HTMLInputElement>) =>{EstHandler(event);
         }}
          variant="outlined" value={props.estimateTask}
          onKeyDown={(event:React.KeyboardEvent<HTMLInputElement>)=>props.inputEstimateHandle(event,event.currentTarget.value)} name='estimate' margin="normal"/>
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
                  onChange={changePriority}
                  value={selectedd}
                  defaultValue="LOW" >  
                  <FormControlLabel  control={<Radio  color="primary"  checked={selectedd === 'LOW'} />} value='LOW' label='LOW' />
                  <FormControlLabel control={<Radio color="primary"  checked={selectedd === 'MEDIUM'}/>}  value='MEDIUM'label='MEDIUM' />
                  <FormControlLabel control={<Radio color="primary" checked={selectedd === 'HIGHT'} />}  value='HIGHT' label='HIGHT' />
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
                  defaultValue='TODO'  
                  aria-labelledby='status-buttons-group' 
                  onChange={changeStatus}
                  value={selectedStatus}
                   name='status'>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedStatus === 'TODO'} />}  label='TODO' value='TODO'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedStatus === 'DOING'} />}  label='DOING' value='DOING'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedStatus === 'DONE'} />}  label='DONE' value='DONE'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedStatus === 'WARNING'} />}  label='WARNING' value='WARNING'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedStatus === 'PENDING'} />}  label='PENDING' value='PENDING' />
                     <FormControlLabel control={<Radio color="secondary" checked={selectedStatus === 'FAILD'} />}  label='FAILD' value='FAILD' />
                  </RadioGroup>
              </FormControl>
             </Box>
          </Box>
            
          {props.IsCreate ? <p style={StyleSuccess}>
              task successfully create!
             </p> :''}
          <Button onClick={sendDataTodo}
          sx={{backgroundColor:'blueviolet',marginRight:'auto',marginTop:'.8em'}}
           variant="contained">Add Todo</Button>
        </Box>
      </Modal>
    </div>
  );
}