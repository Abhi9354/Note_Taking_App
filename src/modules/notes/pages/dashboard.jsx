
import { Container, Grid } from "@mui/material"
import { Header } from "../../../shared/components/Header"
import { Main } from "../../../shared/components/Main"
import { Menu } from "../../../shared/components/Menu"




export const Dashboard=()=>{
    // let AddData= {};
    // const RecievedAdd=(DataFromMain)=>{
        // console.log("recieved data",DataFromMain)
    //    AddData=DataFromMain;
    // }
    return(<Container>
        <Header/>
        <Grid container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={4}><h2>Menu</h2>
                        
                        
                       <Menu/>

                    </Grid>
                    <Grid item xs ={8}><h2>Main</h2>
                    <Main />
                    {/* //fnc={RecievedAdd} sendToView={AddData} */}
                    </Grid>
             </Grid>
        </Container>
        
    )
}