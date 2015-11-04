# _TODO review and set up coommands
start-prod:
	docker-compose up -d

start:
	docker login --username="freele" --password="123456" --email="kremenets0207@gmail.com"
	env COMPOSE_FILE=$(PWD)/docker-compose-develop.yml docker-compose up

clean:
	docker stop $(docker ps -aq)
	docker rm $(docker ps -aq)

pull:
	docker login --username="freele" --password="123456" --email="kremenets0207@gmail.com"
	docker-compose pull

stop:
	docker-compose stop

status:  
	docker-compose ps

build:  
	docker build -t "freele/dockers:glossary" .
	
docker-clean:
	docker rmi $(docker images | grep "^<none>" | awk '{print $3}')

	docker rm $(docker ps -a | grep Exited | awk '{print $1}')

# cli:  
#	docker-compose run --rm web bash
cli-dev:  
	env COMPOSE_FILE=$PWD/docker-compose-develop.yml --rm web bash

deploy-do:
	docker-machine create \
	--driver digitalocean \
	--digitalocean-region ams2 \
	--digitalocean-access-token {TOKEN} \
	glossary-staging

# log:  
# 	@tail -f logs/nginx-error.log

# cc:  
#	docker-compose run --rm web drush cc all

# restart:  
#	docker-compose stop web
#	docker-compose start web
#	@tail -f logs/nginx-error.log

.PHONY: clean start stop status cli log cc restart start-dev build deploy-do