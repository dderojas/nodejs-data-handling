import fetch from 'node-fetch';


const baseURL = `https://api.github.com`;

const getAllOpenPulls = async (userAndRepo) => {
  let openPullsInfo;
  const profile = userAndRepo[3];
  const repo = userAndRepo[4];

  await fetch(`${baseURL}/repos/${profile}/${repo}/pulls`)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      openPullsInfo = data;
    })

  return openPullsInfo;
}

const numberOfcommitsPerPull = async (pullsArr) => {
  let promises = [];
  let pullTitles = [];

  for (let i = 0; i < pullsArr.length; i++) {
    promises.push(fetch(pullsArr[i]['commits_url']).then(data => data.json()))
    pullTitles.push(pullsArr[i].title)
  }

  let resolvedPromises = await Promise.all(promises)

  let finalResults = resolvedPromises.map((elem, i) => {
    return { pullTitle: pullTitles[i], commitNumber: elem.length }
  })

  return finalResults;
}


export {
  getAllOpenPulls,
  numberOfcommitsPerPull
};