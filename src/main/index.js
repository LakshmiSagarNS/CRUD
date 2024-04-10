const express = require('express');
const datasetsRoutes = require('../route/routes');
const app = express();
const port = 3000;
app.use(express.json());

//app.get("/",(req,res)=>{res.send("Hello World");});
app.use("/api/v1/datasets",exeRoutes);

app.listen(port,() => console.log(`app listening on port ${port}`));
