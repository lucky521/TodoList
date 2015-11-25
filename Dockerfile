FROM ubuntu
MAINTAINER Lucky <lu.dev@outlook.com>

RUN apt-get update 
RUN apt-get install nodejs
RUN apt-get install npm
RUN apt-get install redis-server

 CMD ["/usr/bin/node", "server.js"] 

