import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users/1/posts";
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
      <Typography variant="h2"style={{ textAlign: 'center'}}  >User Data</Typography>

      <Grid container spacing={2}>
        {datas.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {data.id}
                </Typography>
                <Typography variant="h3" component="h2">
                  {data.title}
                </Typography>
                <Typography color="textSecondary">
                  {data.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

    //
  );
}

export default App;
