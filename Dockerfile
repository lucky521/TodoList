FROM node
MAINTAINER Lucky <lu.dev@outlook.com>

#RUN apt-get install python-software-properties
#RUN add-apt-repository -y ppa:chris-lea/redis-server
#RUN add-apt-repository -y ppa:chris-lea/node.js
#RUN apt-get update 
#RUN apt-get install -y nodejs
#RUN apt-get install -y redis-server
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

CMD ["node", "server.js"] 

EXPOSE 3000
