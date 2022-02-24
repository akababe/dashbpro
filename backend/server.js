const express = require('express');
const routes = require('./router'); 
const app = express();
const port = process.env.APP_PORT || '5000';

app.use(routes);
app.listen(port, () => {console.log(`app berjalan di port ${port}`)});