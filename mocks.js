const mockPullData = {
  data: [
    {
      url: "https://api.github.com/repos/dderojas/Cool-App/pulls/1",
      number: 1,
      title: 'hello there',
      state: 'open',
      commits_url: 'https://api.github.com/repos/dderojas/Todo-App/pulls/1/commits'
    },
    {
      url: "https://api.github.com/repos/dderojas/Cool-App/pulls/2",
      number: 2,
      title: 'cool beans',
      state: 'open',
      commits_url: 'https://api.github.com/repos/dderojas/Todo-App/pulls/2/commits'
    },
  ]
}

const mockCommitData = [
  { 
    data: [
      { sha: 'asdf1234', node_id: 'utyr746', commit: { message: 'this is a commit'}, author: { login: 'Joe'}, parents:[{}] }, 
      { sha: 'asdf1234', node_id: 'utyr746', commit: { message: 'this is a commit'}, author: { login: 'Joe'}, parents:[{}] },
    ] 
  }, 
  { 
    data: [
      { sha: 'asdf1234', node_id: 'utyr746', commit: { message: 'this is a commit'}, author: { login: 'Joe'}, parents:[{}] }, 
      { sha: 'asdf1234', node_id: 'utyr746', commit: { message: 'this is a commit'}, author: { login: 'Joe'}, parents:[{}] }, 
      { sha: 'asdf1234', node_id: 'utyr746', commit: { message: 'this is a commit'}, author: { login: 'Joe'}, parents:[{}] }, 
    ] 
  }
]

module.exports = {
  mockPullData,
  mockCommitData
}