import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {status} from './Interface'
import {priority} from './Interface'
import { TransitionProps } from '@mui/material/transitions';
type DialogDelProps={
    OpenDialog:(id: number,
        title: string,
        priority: priority,
        datetime: string,
        estimate: number,
        status:status,
        hash:string)=> void,
    isOpen:boolean,
    CloseDialog:(is:boolean)=>void,
    DialogHandler:()=>void
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogDel(props:DialogDelProps) {
const handleCloseDialog = () => {
    props.CloseDialog(false)
};
  return (
    <React.Fragment>
      <Dialog
        open={props.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure ?"}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained" color="success">Disagree</Button>
          <Button onClick={props.DialogHandler} variant="outlined" color="error">Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}