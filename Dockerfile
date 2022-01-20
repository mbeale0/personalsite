FROM nginx

COPY index.html /usr/share/nginx/html
COPY images /usr/share/nginx/html
COPY css /usr/share/nginx/html
COPY html /usr/share/nginx/html
