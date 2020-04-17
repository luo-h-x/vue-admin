import Mock from 'mockjs'

Mock.mock('/api/users', 'get', {
  status: 200,
  message: '获取成功',
  'data|5-10': [
    {
      id: '@increment(1)',
      name: '@string(lower,5,15)',
      password: '@string(5,12)'
    }
  ]
})
Mock.mock('/api/login', 'post',
  function (options) {
    // console.log(options.body)
    const users = JSON.parse(options.body)
    console.log(users)
    if (users.name === 'admin') {
      return {
        status: 200,
        message: '登录成功'
      }
    } else {
      return {
        status: 401,
        message: '登录失败'
      }
    }
  }
)
