const axios = require('axios');

const baseURL = `https://api.github.com`;

const getAllOpenPulls = async (userAndRepo) => {
  let openPullsInfo;
  const profile = userAndRepo[3];
  const repo = userAndRepo[4];

  await axios.get(`${baseURL}/repos/${profile}/${repo}/pulls`)
    .then((response) => {
      const { data } = response;
      openPullsInfo = data;
    })

  return openPullsInfo;
}

const numberOfcommitsPerPull = async (pullsArr) => {
  let promises = [];
  let pullTitles = [];

  for (let i = 0; i < pullsArr.length; i++) {
    promises.push(axios.get(pullsArr[i]['commits_url']))
    pullTitles.push(pullsArr[i].title)
  }

  let resolvedPromises = await Promise.all(promises)

  let finalResults = resolvedPromises.map((elem, i) => {

    const { data } = elem;
    return { pullTitle: pullTitles[i], commitNumber: data.length }
  })

  return finalResults;
}


module.exports = {
  getAllOpenPulls,
  numberOfcommitsPerPull
};