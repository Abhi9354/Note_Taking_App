import { Set } from "../model/123";


export const noteOperation={
    notes:[],
    addNote(id,title,descr,cdate,importance){
const noteObj= new Set(id,title,descr,cdate,importance);
this.notes.push(noteObj);
console.log("all notes",this.notes);
      return noteObj;
    }
    ,getNotes(){
        return this.notes;
    }
}