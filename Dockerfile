FROM ubuntu
MAINTAINER Lucky <lu.dev@outlook.com>

#RUN apt-get install python-software-properties
#RUN add-apt-repository -y ppa:chris-lea/redis-server
#RUN add-apt-repository -y ppa:chris-lea/node.js
#RUN apt-get update 
#RUN apt-get install -y nodejs
#RUN apt-get install -y redis-server

CMD ["node", "server.js"] 

EXPOSE 3000
