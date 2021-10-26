const express = require('express') ;
const cors = require('cors');
const { getAllOpenPulls, numberOfcommitsPerPull } = require('./api.js');

const app = express();
app.use(cors())
const port = 3001

app.get('/', async (req, res) => {
  const { gitURL } = req.query;
  let userAndRepo = gitURL.split('/')
  const pullsResults = await getAllOpenPulls(userAndRepo)
  const pullsCommitsNumber = await numberOfcommitsPerPull(pullsResults)

  res.status(200).send({ pullsResults, pullsCommitsNumber })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})