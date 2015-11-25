FROM ubuntu
MAINTAINER Lucky <lu.dev@outlook.com>

RUN \
	apt-get update
	apt-get install nodejs
	apt-get install npm
	apt-get install redis-server

 CMD ["/usr/bin/node", "server.js"] 

