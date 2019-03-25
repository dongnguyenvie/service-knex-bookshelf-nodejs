FROM node:latest
ADD ./docker_compose/nodejs/start.sh /start.sh
# RUN CMD
RUN sed -i 's/\r//' start.sh
RUN chmod +x start.sh
ADD . /app
WORKDIR /app
