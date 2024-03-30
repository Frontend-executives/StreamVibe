FROM ubuntu:latest

RUN apt update
RUN apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

WORKDIR ./stream-vibe
COPY . .
EXPOSE 3000
CMD npm run dev
