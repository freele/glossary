##Strelka class glossary experiment  
###Current tasks:  
[huboard](https://huboard.com/freele/glossary/)  (log in with github account)  
###Technology stack:  
[react](https://facebook.github.io/react/) - js library for building interfaces (by facebook)  
[express](http://expressjs.com/) - node.js library, server-side  
[mongodb](https://www.mongodb.org/) - NoSQL database  
[mongoose](http://mongoosejs.com/) - mongodb object modelling  
[cerebral](http://christianalfoni.com/cerebral/#/0) - framework for building single page applications  
###Readlist:  
[git](http://githowto.com/) - version control system  
[github workflow](https://github.com/sevntu-checkstyle/sevntu.checkstyle/wiki/Development-workflow-with-Git:-Fork,-Branching,-Commits,-and-Pull-Request) - open source project collaboration workflow  
##Deploy  
###Local machine with docker  
Install Docker: [docker](http://docs.docker.com/windows/step_one/)  
Clone repo  
Run `make build` it will build docker image locally  
Run `make dev` it will run development environment which consists of 2 containers: mongodb and nodes server with api and static (react js) routes.  
Run `docker ps`, copy container ID of freele/dockers:glossary  
Run `docker exec -ti {paste container id (without curly braces)} bash`  
Now you are in console of node server. And files synchronized with your local repo.  
Run `npm start` it will run nodejs server  
The only problem - watcher will not work this way (yet). So after updating files in the repository you have to rerun service (`Ctrl+C`, `npm start`)  
###Local machine  
`npm i`  
`npm start`  
notes:  
[sharp](https://www.npmjs.com/package/sharp) module may require some additional libraries to work with images (VIPS), check [sharp](https://www.npmjs.com/package/sharp) docs.  