# Imagen base oficial de Node.js
FROM node:22

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias en modo producción
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto (coincide con process.env.PORT o 3000)
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]