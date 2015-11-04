FROM ubuntu

RUN mkdir /src
WORKDIR /src



RUN apt-get update
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:chris-lea/node.js -y
RUN apt-get update
RUN apt-get install nodejs -y

RUN npm install babel-cli -g 

# prepare build
ADD package.json package.json
RUN npm install
RUN rm package.json

# connect resources
ADD . ./

# RUN npm start

# share port
EXPOSE 3000

# run app
CMD ["npm", "start"]
