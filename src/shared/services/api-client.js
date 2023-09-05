import axios from 'axios';
export const apiClient={
get(){
//read
},
async post(URL,data){
//insert
try{
const response=await axios.post(URL,data);
return response;
}
catch(err){
    throw err;
}
},
put(){
//update
}

};