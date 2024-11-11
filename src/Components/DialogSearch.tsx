import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { log } from 'console';
type DialogSearch={
    OpenSearchDialog:boolean,
    CloseSearchHandler:(is:boolean)=>void,
    FilteredData:(str:string)=>void
}
export default function DialogSearch(props:DialogSearch) {
;

  const handleClose = () => {
    props.CloseSearchHandler(false)
  };

const setSearchQuery=(event:React.ChangeEvent<HTMLInputElement>)=>{
props.FilteredData(event.currentTarget.value)
}
  return (
    <React.Fragment>
      <Dialog 
        open={props.OpenSearchDialog}
        onClose={handleClose} >
        <DialogContent sx={{width:'100%'}}>
          <TextField sx={{width:'100%'}}  onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event);
      }}
            autoFocus
            required
            margin="dense"
            id="search"
            name="searchItem"
            label="type..."
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}