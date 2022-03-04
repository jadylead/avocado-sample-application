FROM node:14-alpine

RUN cd /opt \
    && mkdir app \
    && chmod -R 777 /opt/app/
COPY . /opt/app/

WORKDIR /opt/app
RUN npm i

ARG node_env
ENV NODE_ENV ${node_env:-production}

ARG service_version
ENV SERVICE_VERSION ${service_version:-v1}

CMD npm run start
EXPOSE 4005