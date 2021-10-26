import fetch from 'node-fetch';


const baseURL = `https://api.github.com`;

const getAllOpenPulls = async (userAndRepo) => {
  let openPullsInfo;
  const profile = userAndRepo[1];
  const repo = userAndRepo[2];

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

  for (let i = 0; i < pullsArr.length; i++) {
    promises.push(fetch(pullsArr[i]['commits_url']).then(data => data.json()))
  }

  console.log(promises, 'promsies??!?!?')
  let result = await Promise.all(promises)
  console.log(result, 'innumberrrrrrrrr')
  return result
}

export {
  getAllOpenPulls,
  numberOfcommitsPerPull
};