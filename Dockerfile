# ==========================
# Etapa de desarrollo con Ionic
# ==========================
FROM node:20-alpine

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Instalar dependencias globales necesarias
RUN npm install -g @ionic/cli @angular/cli

# Copiar archivos de dependencias primero (mejora el cache de Docker)
COPY package*.json ./

# Instalar dependencias locales
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto de ionic serve
EXPOSE 8100

# Comando por defecto: levantar ionic serve
CMD ["ionic", "serve", "--host=0.0.0.0", "--port=8100", "--disableHostCheck"]
