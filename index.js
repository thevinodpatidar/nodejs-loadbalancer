const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const jphRoutes = require('./jph-routes');

app.use("/jph", jphRoutes);
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

