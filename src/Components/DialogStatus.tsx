import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useState } from 'react'
import { TransitionProps } from '@mui/material/transitions';
type DialogStatusProp={
    CloseDialogStatus:(is:boolean)=>void,
    DialogStatusHandler:(newStatus:string)=>void,
    isOpenStatus:boolean,
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogStatus(props:DialogStatusProp) {
    const [selectedNewStatus,setSelectedNewStatus] =useState('TODO')
    const handleCloseDialog = ()=>{
        props.CloseDialogStatus(false)
    }
    const changeNewStatus = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedNewStatus(event.currentTarget.value)   
    }
    const sendStatus = ()=>{
        props.DialogStatusHandler(selectedNewStatus)
    }
  return (
    <React.Fragment>
      <Dialog
        open={props.isOpenStatus}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit status of task"}</DialogTitle>
        <DialogContent>
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
                  onChange={changeNewStatus}
                  value={selectedNewStatus}
                   name='status'>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedNewStatus === 'TODO'} />}  label='TODO' value='TODO'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedNewStatus === 'DOING'} />}  label='DOING' value='DOING'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedNewStatus === 'DONE'} />}  label='DONE' value='DONE'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedNewStatus === 'WARNING'} />}  label='WARNING' value='WARNING'/>
                     <FormControlLabel control={<Radio color="secondary" checked={selectedNewStatus === 'PENDING'} />}  label='PENDING' value='PENDING' />
                     <FormControlLabel control={<Radio color="secondary" checked={selectedNewStatus === 'FAILD'} />}  label='FAILD' value='FAILD' />
                  </RadioGroup>
              </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained" color="error">No</Button>
          <Button onClick={sendStatus} variant="outlined" color="success">Yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}