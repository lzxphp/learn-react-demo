// api.js

import Mock from "mockjs";

// 模拟数据
let { mockData } = Mock.mock({
  "mockData|6": [
    {
      "id|+1": 1,
      name: "@name",
      password: "@natural",
      email: "@email",
      address:"@city(true)"
      // 更多属性...
    },
  ],
});

// 获取所有数据
Mock.mock("/api/users", "get", () => {
  return mockData;
});

// 获取单个数据
Mock.mock(/\/api\/users\/\d+/, "get", (options) => {
  const id = options.url.match(/\d+/)[0];
  const user = mockData.find((item) => item.id === parseInt(id));
  return user;
});

// 添加数据
Mock.mock("/api/users", "post", (options) => {
  const newUser = JSON.parse(options.body);
  newUser.id = mockData.length + 1;
  mockData.push(newUser);
  return newUser;
});

// 更新数据
Mock.mock(/\/api\/users\/\d+/, "put", (options) => {
  const id = options.url.match(/\d+/)[0];
  const updatedUser = JSON.parse(options.body);
  mockData = mockData.map((user) =>
    user.id === parseInt(id) ? { ...user, ...updatedUser } : user
  );
  return updatedUser;
});

// 删除数据
Mock.mock(/\/api\/users\/\d+/, "delete", (options) => {
  const id = options.url.match(/\d+/)[0];
  mockData = mockData.filter((user) => user.id !== parseInt(id));
  return {};
});
