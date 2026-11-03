# 1. Fase de Build
FROM node:24-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration=production

# 2. Fase de Produção (NGINX Estático)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copia os ficheiros gerados pelo Angular 19 para a pasta do NGINX
COPY --from=builder /app/dist/landing-app/browser ./

# Configuração do NGINX para escutar na porta 3006 com suporte a rotas SPA
RUN echo 'server { \
    listen 3006; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 3006

CMD ["nginx", "-g", "daemon off;"]
