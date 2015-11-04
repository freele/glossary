FROM ubuntu

RUN mkdir /src
WORKDIR /src



RUN apt-get update
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:chris-lea/node.js -y
RUN apt-get update
RUN apt-get install nodejs python -y


# prepare build
ADD package.json package.json
RUN npm install
RUN rm package.json

RUN npm install rimraf -g 
RUN npm install webpack -g 

# connect resources
ADD . ./

# RUN npm start

# share port
EXPOSE 3000

RUN rimraf dist && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --profile --colors
# run app
CMD ["npm", "start"]
