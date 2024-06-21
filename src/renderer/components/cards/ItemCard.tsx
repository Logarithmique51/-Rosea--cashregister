import { Box, Card } from "@mui/material";
import Pizza from "../../assets/pizza/americaine.png"

export default function ItemCard(){
  return(

    <Card sx={{backgroundColor:'white',width:317}}>
      <img src={Pizza} height={'auto'} width={150}></img>
    </Card>
  )
}
