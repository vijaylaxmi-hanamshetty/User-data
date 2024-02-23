import React, { useEffect, useState } from "react";
import axios from "axios";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography'
function App() {
  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";
    axios
      .get(apiUrl)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
         
  return (
    <div>
      <h1  style={{textAlign:'center'}}>User Data</h1>
      
       
      {datas.map(data => (
        <Card sx={{ minWidth: 275 }} style={{margin:'20px'}}>
        <CardContent key={data.id}>
        <Typography gutterBottom variant="h4" component="div">
        {data.name}
        </Typography>
        <Typography variant="h4" component="h2">
  {data.email}
</Typography>
        <Typography variant="body2" color="text.secondary">
         {data.body}
        </Typography>
        </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default App
          
        
        
        

  

        