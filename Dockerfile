# Dockerfile for React client

# Utilise Node.js version 18.17.1
FROM node:18.17.1-alpine

# Définit le répertoire de travail à /usr/src/app
WORKDIR /usr/src/app

# Copie les fichiers package.json et package-lock.json dans le répertoire de travail de l'image
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install --silent

# Copie tous les fichiers du répertoire local dans le répertoire de travail de l'image Docker
COPY . .

# Expose le port 3000, généralement utilisé par les applications React en développement
EXPOSE 3000

# Définit la commande par défaut pour démarrer l'application React
CMD ["npm", "start"]
