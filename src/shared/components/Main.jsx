import { Route, Routes } from "react-router"
import { Home } from "../../modules/notes/components/Home"
import { AddNote } from "../../modules/notes/components/Addnote"
import { DeleteNote } from "../../modules/notes/components/DeleteNote"
import { ViewNote } from "../../modules/notes/components/ViewAll"
import { SearchNote } from "../../modules/notes/components/SearchNote"
import { UpdateNote } from "../../modules/notes/components/UpdateNote"
import { useState } from "react"
import { noteOperation } from "../../modules/notes/services/noteOperations"


export const Main=()=>{
    const [notes,setNotes]=useState([]);
    const func=()=>{
        const notesArray= noteOperation.getNotes();
        setNotes(...[notesArray]);
        // const data=DataFromAdd;
        // console.log("recieved",DataFromAdd," ",data);
        // props.fnc(data);
    }
    return (
        <>
        <Routes>
            
            <Route path="/" element= {<Home/>}/>
            <Route path="/add" element= {<AddNote fn={func}/>}/>
            <Route path="/delete" element= {<DeleteNote/>}/>
            <Route path="/view-all" element= {<ViewNote notes={notes} />}/>
            <Route path="/search" element= {<SearchNote/>}/>
            <Route path="/update" element={<UpdateNote/>}/>
        </Routes>
        </>
    )
}