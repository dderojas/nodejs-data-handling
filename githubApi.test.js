const { getAllOpenPulls, numberOfcommitsPerPull, baseURL } = require('./server/api');
const axios = require('axios');

jest.mock('axios');

const mockPullData = {
  data: [
    {
      url: "https://api.github.com/repos/dderojas/Cool-App/pulls/1",
      number: 1,
      title: 'test pull request',
      state: 'open',
      commits_url: 'https://api.github.com/repos/dderojas/Todo-App/pulls/1/commits'
    },
    {
      url: "https://api.github.com/repos/dderojas/Cool-App/pulls/2",
      number: 2,
      title: 'cool pull request',
      state: 'open',
      commits_url: 'https://api.github.com/repos/dderojas/Todo-App/pulls/2/commits'
    },
  ]
}

const mockCommitData = [{ data: [1, 2] }, { data: [1, 2, 3] }]

describe('github api fetch calls', () => {
  it('should get all open pull requests', async () => {
    axios.get.mockResolvedValueOnce(mockPullData);

    const url = 'https://github.com/dderojas/Todo-App'

    const result = await getAllOpenPulls(url)

    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/repos/dderojas/Todo-App/pulls`);
    expect(result).toEqual(mockPullData.data);
  })

  it('should return number of commits per pull request', async () => {
    let finalResults;
    for (let i = 0; i < mockCommitData.length; i++) {
      
      axios.get.mockResolvedValue(mockCommitData[i]);
      const results = await numberOfcommitsPerPull(mockPullData.data)
      finalResults = [ finalResults, ...results]
    }
    console.log(finalResults, 'woooooooooof')
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/repos/dderojas/Todo-App/pulls/2/commits');
  })
})