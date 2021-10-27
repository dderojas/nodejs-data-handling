const { getAllOpenPulls, numberOfcommitsPerPull, baseURL } = require('./server/api');
const { mockPullData, mockCommitData } = require('./mocks')
const axios = require('axios');

jest.mock('axios');


describe('github api fetch calls', () => {
  it('should get all open pull requests', async () => {
    axios.get.mockResolvedValueOnce(mockPullData);

    const url = 'https://github.com/dderojas/Todo-App';
    const result = await getAllOpenPulls(url)
    
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/repos/dderojas/Todo-App/pulls`);
    expect(result).toEqual(mockPullData.data);


    axios.get.mockResolvedValueOnce(mockPullData);

    const altUrl = 'github.com/dderojas/Todo-App';
    const altUrlResult = await getAllOpenPulls(altUrl);

    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/repos/dderojas/Todo-App/pulls`);
    expect(altUrlResult).toEqual(mockPullData.data);
  })

  it('should return number of commits per pull request', async () => {
    let finalResults = []
    for (let i = 0; i < mockCommitData.length; i++) {
      
      axios.get.mockResolvedValue(mockCommitData[i]);
      const results = await numberOfcommitsPerPull([mockPullData.data[i]])
      finalResults.push(results[0])
    }
    
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/repos/dderojas/Todo-App/pulls/1/commits');
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/repos/dderojas/Todo-App/pulls/2/commits');
    expect(finalResults).toEqual([{ pullTitle: 'hello there', commitNumber: 2 }, { pullTitle: 'cool beans', commitNumber: 3}])
  })
})