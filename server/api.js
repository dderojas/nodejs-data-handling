const axios = require('axios');

const baseURL = `https://api.github.com`;

const getAllOpenPulls = async (gitURL) => {
  let userAndRepo = gitURL.split('/')
  const profile = userAndRepo[3];
  const repo = userAndRepo[4];
  let openPullsInfo;
  
  try {
    const { data } = await axios.get(`${baseURL}/repos/${profile}/${repo}/pulls`);
    openPullsInfo = data;
  } catch(e) {
    console.error(e)
  }

  return openPullsInfo;
}


const numberOfcommitsPerPull = async (pullsArr) => {
  if(!Array.isArray(pullsArr)) return [];

  let promises = [];
  let pullTitles = [];

  for (let i = 0; i < pullsArr.length; i++) {
    promises.push(axios.get(pullsArr[i]['commits_url']))
    pullTitles.push(pullsArr[i].title)
  }
  
  let finalResults;

  try {
    let resolvedPromises = await Promise.all(promises)
    finalResults = resolvedPromises.map((elem, i) => {
      const { data } = elem;
      return { pullTitle: pullTitles[i], commitNumber: data.length }
    })

  } catch(e) {
    console.error(e);
  }

  return finalResults;
}


module.exports = {
  getAllOpenPulls,
  numberOfcommitsPerPull,
  baseURL
};