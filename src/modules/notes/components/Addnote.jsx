import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { noteOperation } from "../services/noteOperations";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiColorInput } from 'mui-color-input'
import dayjs from 'dayjs';

import { addNote } from "../redux/note-slice";
import { Set } from "../model/123";
import {useDispatch} from 'react-redux'
import { Snackbar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';





export const AddNote = (props) => {
  /*use the use ref hook for storing the refrence  */
   const id= React.useRef();
   const title= React.useRef();
   const desc= React.useRef();
   const [Datevalue, setDateValue] = React.useState(null);
   const [colorvalue, setColorValue] = React.useState('#ffffff');
  //  const [message,setMessage]=React.useState('')
  
  const [open, setOpen] = React.useState(false);
  const Dispatch = useDispatch();
  const handleClose= ()=>setOpen(false)
  const action = <> <IconButton
  size="small"
  aria-label="close"
  color="inherit"
  onClick={handleClose}> <CloseIcon fontSize="small" />
  </IconButton>

  </>










    const ButtonClickedAddNote=()=>{
        console.log ("button clicekd..")
        const idvalue = id.current.value;{/*to get value by the refrence  */}
        const titlevalue= title.current.value;
        const descvalue= desc .current.value;
        const date = Datevalue? dayjs(Datevalue) . format(' MM/DD/YYYY '):'';
        // const DataCollect = {'id':idvalue,'desc':descvalue,"title":titlevalue,"CompletionDate":compvalue,"Importance":impvalue};
        //fn(DataCollect);
        // const DataCollect=noteOperation.addNote(idvalue,titlevalue,descvalue,compvalue,impvalue);
        // noteOperation.addNote(idvalue,titlevalue,descvalue,date,colorvalue);
        // props.fn();
        const noteObject =new Set(idvalue,titlevalue,descvalue,date,colorvalue)
        Dispatch(addNote(noteObject));
        // setMessage('Record Added..')
        // setTimeout(()=>{
        //   setMessage('');
        // },2000)
        setOpen(true);

    }
  return (
    /*Create the view for the Add note */
    <><h1>Add note</h1>
      <Box
        sx={{
          margin: 5,
          flexDirection: "column",
          display: "flex",
        }}
      ><Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note added"
      action={action}
    />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <TextField inputRef={id} id="outlined-basic" label="Note ID" variant="outlined" />{/*set the input ref for refrence of the ui to get data*/}
        <Box />

        <br />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <TextField inputRef={title} id="outlined-basic" label="Note Title" variant="outlined" />
        <Box />

        <br />
       
        <LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker value={Datevalue} onChange={(selectedDate) => setDateValue(selectedDate)} />
</LocalizationProvider>
        

        <br />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <TextField
        inputRef={desc}
          id="outlined-basic"
          label="Note Description"
          multiline
          maxRows={4}
          variant="outlined"
        />
        <Box />

        <br />

        <MuiColorInput value={colorvalue} onChange={(selectedColor=>setColorValue(selectedColor))} />

<br />


        <Stack spacing={2} direction="row">
      
      <Button onClick={ButtonClickedAddNote} variant="contained">Add</Button>{/*set the event listenerand calling the function*/}
      
    </Stack>

      </Box>
    </>
  );
};
