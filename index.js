
const express = require('express');
const app = express();
const helloRoute = require('./routes/hello');
const accountRoute = require('./routes/account');

app.use('/hello', helloRoute);
app.use('/account', accountRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
