FROM us-docker.pkg.dev/shared-prod-tech/golden/nginx:alpine

USER root

RUN rm -rf /usr/share/nginx/html/*

COPY build /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html && \
        chown -R efx_container_user:efx_container_user /var/cache/nginx && \
        chown -R efx_container_user:efx_container_user /var/log/nginx && \
        chown -R efx_container_user:efx_container_user /etc/nginx/conf.d && \
        chown -R efx_container_user:efx_container_user /usr/share/nginx

RUN mkdir /etc/nginx/pid && chown -R efx_container_user:efx_container_user /etc/nginx/pid

COPY nginx/nginx.conf /etc/nginx/nginx.conf

USER efx_container_user

EXPOSE 5000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
