#!/bin/bash
npm install knex -g
npm install
knex migrate:latest
knex seed:run
node index.js