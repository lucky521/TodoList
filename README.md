# TodoList
Based on **node.js** and **redis**, Running on China Docker **Daocloud**.


[Online ](https://luckykindle-lu-todolist.daoapp.io/)



## Local Environment

/config/development.json 

    {
      "port": 3000,
      "dbType": "redis",
      "redis_host": "localhost",
      "redis_port": 6379,
      "redis_auth": "lucky"
    }
  
## Docker Environment

    - DOCKER_ENV=daocloud
    - port=3000
    - dbType=redis
    - redis_host=10.10.10.10
    - redis_port=111
    - redis_auth=111
