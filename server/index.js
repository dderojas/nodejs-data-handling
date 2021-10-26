import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001
const baseURL = `https://api.github.com`; 
// https://api.github.com/repos/dderojas/Todo-App/pulls/1/commits
// data.length for the array of commits should do this
app.get('/', (req, res) => {
  console.log(req.query, 'testttttt')
// fetch(`${baseURL}/repos/dderojas/Todo-App/pulls`)
//   .then((data) => {
//     console.log(data, 'asdfasdfasdf')
//     return data.json()
//   })
//   .then((data) => {
//     console.log(data?.length, 'dataaaaa')
//     res.status(200).send(data)
//   })
  
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})