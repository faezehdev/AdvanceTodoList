import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import  {TextField} from '@mui/material';
import Button from '@mui/material/Button';
type ModalDelProps ={
    openDelModal:boolean,
    CloseModalDel:(is:boolean)=>void,
    deleteTask:(text:string)=>void,
    handleHashID:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    InnerhashID:string,
    hashIDError:boolean,
    TextHashEror:string,
    IsSuccessDelete:boolean
}
export default function ModalDel(props:ModalDelProps) {
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
const StyleSuccess ={
  color:'green',
  fontWeight:900
}
const handleCloseModal = () => {
    props.CloseModalDel(false)
};  

const sendDataRemove = ()=>{
    props.deleteTask(props.InnerhashID)
    
}
    return (
      <div>
        <Modal
          open={props.openDelModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             please enter task hashID to delete this:
            </Typography>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="please enter..." variant="outlined"
             value={props.InnerhashID}  error={props.hashIDError}
             helperText={props.hashIDError? props.TextHashEror : ""}   
          onChange={(event:React.ChangeEvent<HTMLInputElement>)=>props.handleHashID(event)}
           name='hashID' margin="normal"/>
           {props.IsSuccessDelete ? <p style={StyleSuccess}>
              task successfully delete!
             </p> :''}
             
           <Button onClick={sendDataRemove}
          sx={{backgroundColor:'blueviolet',marginRight:'auto',marginTop:'.8em'}}
           variant="contained">Delete</Button>
          </Box>
        </Modal>
      </div>
    );
  }