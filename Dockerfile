FROM ubuntu
MAINTAINER Lucky <lu.dev@outlook.com>

RUN add-apt-repository -y ppa:chris-lea/redis-server
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update 
RUN apt-get install -y nodejs
RUN apt-get install -y redis-server

CMD ["/usr/bin/node", "server.js"] 

