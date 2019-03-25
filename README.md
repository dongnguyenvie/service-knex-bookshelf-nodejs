# init
Mysql 5.7
shop-service-nodejs
### Create table
```
- $ knex migrate:make migration_name
- $ knex migrate:latest
- $ knex migrate:rollback
```
### Seed data
```
- $ knex seed:make seed_name
- $ knex seed:run
```
### Steps to setup
```
rename file .env.template to .env
config variable
run cmd: 
- knex migrate:latest
- knex seed:run
```
### Using docker-compose
```
build images & container & start docker
step 1: docker-compose build
step 2: docker-compose up
```
