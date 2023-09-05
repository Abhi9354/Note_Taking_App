import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../../shared/services/api-client";

// export const fetchNotes=createAsyncThunk('notes/fetch',async()=>{
//     const response = await apiClient.get();
//     return response;
// })


const noteSlice=createSlice({
    name: "note",
    initialState:{'notes':[],'total':0,'search-result':[],  isLoading:false,err:null},
    reducers :{
        //synch
        //crud operation
        //action - coming from component
        //state - update the centralised store
        addNote(state,action){
            const noteObject=action.payload;
            console.log('Add note reducer operation called ',action.payload);
            state.notes.push(noteObject)
            
        },
        getTotalRecords(state,action){
            state.total=state.notes.length;

        },
        removeNote(state,action){
           
        },
        searchNote(state,action){
            const searchObj= action.payload;
            state['search-result']=state.notes.filter(note=>note.title.includes(searchObj.search))
          
        }
    },

// extraReducers:(builder)=>{
//     builder.addCase(fetchNotes.pending,(state,action)=>{
//         state.isLoading= true;
//     })
//     .addCase(fetchNotes.fulfilled,(state,action)=>{
//         state.isLoading=false;
//         state.notes=action.payload;
//     }).addCase(fetchNotes.rejected,(state,action)=>{
//         state.isLoading=false;
//         state.notes=[];
//         state.err=action.payload;
//     })
// }






    
});
export const {addNote,removeNote,getNote,getTotalRecords,searchNote} =noteSlice.actions;

export default noteSlice.reducer;