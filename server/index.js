import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
app.use(cors())
const port = 3001
const baseURL = `https://api.github.com`; 
// https://api.github.com/repos/dderojas/Todo-App/pulls/1/commits
// data.length for the array of commits should do this
app.get('/', (req, res) => {
  const { gitURL } = req.query;
  let userAndRepo = gitURL.split('/')
  
  fetch(`${baseURL}/repos/${userAndRepo[1]}/${userAndRepo[2]}/pulls`)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      console.log(data?.length, 'dataaaaa')
      let results = data.map((item) => {
        return item.title
      })
      res.status(200).send(results)
    })
  
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})