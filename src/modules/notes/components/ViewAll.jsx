import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes, getTotalRecords, searchNote } from '../redux/note-slice';
import { TextField } from '@mui/material';



export const ViewNote=(props)=>{
  const dispatch=useDispatch();
  const takeSearchValue=(event)=>{
      const searchValue= event.target.value;
      console.log('search value is ', searchValue)
      const searchData={search:searchValue};
      dispatch(searchNote(searchData));
  }




 const notesObject= useSelector(state=>{
  return{'notes':state.noteSlice.notes,'total':state.noteSlice.total,'results':state.noteSlice['search-result'],'isLoading':state.isloading}});
  //component (Html Page) Mount
  //life Cycle
  React.useEffect(()=>{
//component Mount 

dispatch(getTotalRecords())
//push

// dispatch(fetchNotes());

  },[])


    return (<div>
      
        <h1>Total Records=
            {notesObject.total}
            {/* {props.Add.title} */}
        </h1>
        <TextField onChange={takeSearchValue} label="Seacrh  by Title" variant="outlined" />
         <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell align="right">ID</TableCell>
               <TableCell align="left">Title</TableCell>
               <TableCell align="left">Description</TableCell>
               <TableCell align="left">Completion Date</TableCell>
               <TableCell align="right">Importance</TableCell>
               <TableCell align="right">Operation</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
            {notesObject.results.length > 0 && notesObject.results.map(note=>{
              return (<TableRow key={note.id}>
              <TableCell align="right">{note.id}</TableCell>
              <TableCell align="left">{note.title}</TableCell>
              <TableCell align="left">{note.descr}</TableCell>
              <TableCell align="left">{note.cdate}</TableCell>
              <TableCell align="right">{note.importance}</TableCell>
              
              
   
              
             </TableRow>)
            })}
            {notesObject.results.length===0 && notesObject.notes.map(note=>{
               return <TableRow>
                <TableCell align="right">{note.id}</TableCell>
                <TableCell align="left">{note.title}</TableCell>
                <TableCell align="left">{note.descr}</TableCell>
                <TableCell align="left">{note.cdate}</TableCell>
                <TableCell align="right">{note.importance}</TableCell>
                <TableCell align="right"><DeleteIcon  /><EditIcon/></TableCell>
                
                {/* <TableCell align="right"><i class="fa fa-trash" aria-hidden="true"></i> <i class="fa fa-pencil" aria-hidden="true"></i></TableCell> */}
                    
                
               </TableRow>
            })}
            </TableBody>
            </Table>
            </TableContainer>
            </div>  )
   
}