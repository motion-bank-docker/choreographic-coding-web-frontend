FROM nginx:1-alpine
MAINTAINER Motion Bank

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD ./dist /usr/html/
