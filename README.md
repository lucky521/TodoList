# TodoList
Based on **node.js** and **redis**, Running on China Docker **Daocloud**.

[Demo Online](https://luckykindle-lu-todolist.daoapp.io/)



## 部署到本地

```
$ node server.js
```

/config/development.json 

    {
      "port": 3000,
      "dbType": "redis",
      "redis_host": "localhost",
      "redis_port": 6379,
      "redis_auth": "lucky"
    }
  
## 部署到Docker

- 编写dockerfile
- 制作镜像
- 将镜像部署成容器

### 环境变量
    - DOCKER_ENV=daocloud
    - port=3000
    - dbType=redis
    - redis_host=10.10.10.10
    - redis_port=111
    - redis_auth=111
