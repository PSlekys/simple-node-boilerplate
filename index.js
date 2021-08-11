const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running successfully' });
});

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
